/** Official public bootstrap. Verifies the signed installer before execution. */
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash,verify} from 'node:crypto';
import {spawn} from 'node:child_process';
const origin='https://whale-persona-book-updates.spryhare5.chatgpt.site';
const publicKey="-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEAn+Nj4R47z++Zmm1FgcbThFg0bRg8E6Yudz/1BU94zaI=\n-----END PUBLIC KEY-----\n";
async function get(path){
 const url=new URL(path,origin);if(url.origin!==origin)throw Error('安装来源校验失败。');
 const r=await fetch(url,{redirect:'error',signal:AbortSignal.timeout(120000)});
 if(!r.ok)throw Error('安装文件读取失败（'+r.status+'）。');return Buffer.from(await r.arrayBuffer());
}
let dir;
try{
 if(Number(process.versions.node.split('.')[0])<22)throw Error('需要 Node 22 或以上版本。');
 const options=process.argv.slice(2);
 for(let i=0;i<options.length;i+=2)if(!['--profile','--dsh-executable','--dsh-entry'].includes(options[i])||!options[i+1])throw Error('安装参数不支持。');
 const envelope=JSON.parse(await get('/latest.json')),payload=Buffer.from(envelope.payload,'base64');
 if(!verify(null,payload,publicKey,Buffer.from(envelope.signature,'base64')))throw Error('发布签名不正确，未执行安装。');
 const release=JSON.parse(payload),file=release.installer;
 if(release.format!=='persona-book-update/v1'||release.name!=='dsh-persona-book'||!file||!/^install-whale-[\w.-]+\.mjs$/.test(file.url)||!Number.isSafeInteger(file.bytes)||file.bytes<=0||file.bytes>1024*1024)throw Error('安装信息不兼容。');
 const bytes=await get(file.url);
 if(bytes.length!==file.bytes||createHash('sha256').update(bytes).digest('hex')!==file.sha256)throw Error('安装器校验失败，未执行。');
 dir=await mkdtemp(join(tmpdir(),'whale-public-install-'));const installer=join(dir,'installer.mjs');await writeFile(installer,bytes,{mode:0o700});
 process.exitCode=await new Promise((done,reject)=>{
  const child=spawn(process.execPath,[installer,...options],{stdio:['ignore','inherit','inherit'],shell:false});
  child.once('error',()=>reject(Error('无法启动安装器。')));child.once('close',code=>done(code??1));
 });
}catch(error){console.error(error.message);process.exitCode=1;}
finally{if(dir)await rm(dir,{recursive:true,force:true});}
