# 第三方资源与代码说明

EchoText 核心来自 mattjaybe/SillyTavern-EchoText 的固定提交 35a7940f77691807be08c4e2e153118341a90c6e，使用 MIT 许可，全文位于 app/vendor/LICENSE-EchoText.txt。移植增加了宿主桥接、中文词汇、服务端评价器公开、禁用触发过滤和记忆轮数持久化，原算法主体保留。

Moonlit Echoes 的原始预设来自 RivelleDays/SillyTavern-MoonlitEchoesTheme，保存快照保留 AGPL-3.0 许可，许可全文位于 resources/licenses/Moonlit-AGPL.txt。该数据与本项目自有组件分开提供。Violet Glass 原预设来自 Mr-Benedict/SillyTavern-VioletGlassTheme，保留 resources/licenses/Violet-MIT.txt。源地址、内容校验和预设版本记录于 resources/themes/source.json。

新增四个鲸鱼娘头像来自 YunYueSama/codex-deepseek-pet 的 assets/whale 原创资产目录。署名许可全文和作者的资产说明分别位于 resources/licenses/avatar-LICENSE.txt、avatar-license.md。仅使用作者新增角色素材，未使用其外部设计参考图片；显示裁切不更改随包保留的原文件。

React、React DOM 和 scheduler 使用 MIT 许可；图片解码模块 magick-wasm 使用 Apache-2.0，保留其 LICENSE 和 NOTICE。Windows 运行包内 Node.js 许可位于 runtime/LICENSE。各模块自己的许可保持有效，不以本项目许可替代。

默认提示语音是本机语音引擎生成的独立音频，不包含语音引擎或音色模型。源信息见 app/public/sounds/metadata.json。用户提供的原始设定原页与原文按原文件保留，本项目不重新授权第三方角色设定。

HEIC 测试样本取自结构化图像库 libheif 的公开示例，来源 https://github.com/strukturag/libheif/blob/master/examples/example.heic，仅用于格式验证；其来源许可说明随测试资料保存。其余图像和音频格式测试样本由本项目测试脚本生成。

dsh-web / @linxin666/dsh-client-ui-git-graph 0.4.6（https://github.com/zhu1090093659/dsh-web）使用 Apache-2.0。人设本参考该版本的设计令牌、胶囊/菜单/弹窗结构与插槽声明降级方式重新实现适配；修改位于 src/client/40-style.js、50-seats.js、51-dsh-context.js、99-exports.js 及共享 UI 的嵌入外壳。未引入其 Git 执行、worktree 或安装遥测。来源摘要见 resources/integration/dsh-baseline.json，许可全文见 resources/licenses/dsh-web-Apache-2.0.txt。

preview.3 的欢迎插画使用内置 image_gen 按用户角色设定原页及既有 YunYueSama 头像参考生成；生成文件独立保留，来源记录和提示词随项目交付。该生成资产不改变原始角色设计和参考素材各自的权利归属，也不替换原五个头像。

## 深海私语标题字体（2026-10-15）
Ma Shan Zheng，来源 https://github.com/googlefonts/mashanzheng ，仅自托管标题字符子集。OFL 许可全文见 app/public/fonts/MaShanZheng-OFL.txt；字体来自 Google Fonts 官方服务。新增场景由内置 image_gen 生成，提示词见 resources/provenance/night-room.json；角色使用既有透明立绘。


## 深海私语 C 重制（preview.9）
题字改用 Noto Serif SC，官方字体项目 https://github.com/notofonts/noto-cjk ，Google Fonts 官方服务下载字符子集；OFL 全文位于 app/public/fonts/NotoSerifSC-OFL.txt。原 Ma Shan Zheng 字体及许可保留。横卧鲸娘与月海卧室是本轮内置 image_gen 新作，提示词、参考与 WebP 转换说明位于 resources/provenance/night-c-prompts.json；不改变既有角色、设定和头像的权利归属。原 PNG 与旧夜景保留于本轮审核交付的素材原稿目录。月海鲸娘标志与角饰为项目自有 SVG 几何路径。

## 陪伴体验素材（preview.10）

新增三幅已绘制的背景来自みんちりえ（https://min-chi.material.jp/），分别为living2、single_room2、attic_room。作为应用场景嵌入，转换为WebP，未作为独立素材商店或下载工具提供。来源、下载地址及哈希见resources/provenance/scene-library.json，原页条款见resources/licenses/minchi-*.html。

真人日语提示短回应：声素材提供・効果音ラボ（Sound Effect Lab，https://soundeffect-lab.info/sound/voice/line-girl1.html）。仅用于应用实际通知与内置试听，不作为音源集销售或分发，不用于AI训练或声线克隆。录音未变调、未变速；来源与哈希见resources/provenance/living-media.json，使用条款见resources/licenses/SoundEffectLab-terms.html。

操作音：Kenney UI Audio（https://kenney.nl/assets/ui-audio），CC0；本轮使用click3、switch2、rollover2，许可全文见resources/licenses/Kenney-UI-CC0.txt。头像近景使用已交付的角色插画和已署名的YunYueSama表情图，进行了裁切与缩放，没有新绘面部；原素材许可继续适用。
# 0.3.0-preview.13 接收提示音更新

本版按用户审核选择仅内置 A/B/D/F 四项接收提示：messagegakiteruyo1.mp3、yoho1.mp3、n1.mp3、pinponpanpon1.mp3，来自効果音ラボ、配音音枝優日。原始录音速度和音高不变，用于本应用实际通知反馈。原中文合成音及上一轮三组真人预设文件已移除。详细原始地址、哈希和使用条件见 resources/provenance/living-media.json、resources/licenses/SoundEffectLab-terms.html 以及 https://soundeffect-lab.info/agreement/ 。

