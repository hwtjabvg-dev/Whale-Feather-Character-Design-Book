# Whale Feather Character Design Book

DeepSeek Harness 原聊天窗口中的二次元人设与主题插件。中文别名：鲸羽人设本、鲸语人设本。内部兼容包名：`dsh-persona-book`。

## 让 AI 安装

把下面这句话发给具备文件与命令工具的 DeepSeek Harness AI：

> 请读取 https://github.com/hwtjabvg-dev/Whale-Feather-Character-Design-Book 的 README.md 和 AI-INSTALL.md，安装 Whale Feather Character Design Book，检查宿主接入结果并告诉我是否需要重启引擎。

公开安装，无安装密码，不需要配置代理。AI 下载本仓库 `install.mjs` 后用 Node 22+ 执行，安装器校验签名和文件哈希，再注册到宿主 `web` 配置。仓库提供完整源码及运行资源 ZIP。

```sh
curl -fL https://raw.githubusercontent.com/hwtjabvg-dev/Whale-Feather-Character-Design-Book/main/install.mjs -o whale-install.mjs
node whale-install.mjs
```

## 功能与更新

- 直接装饰 DSH 原聊天界面；角色语气、主题、头像、ABDF 四组角色提示音及资源设置。
- 深海私语等内置主题、创意工坊、人设与语气定制，保留个人数据。
- 内置签名更新：前台检查新版，在插件设置点更新，安装后重启 DSH 引擎。公开更新源无需密码。
- 正式名称改变，旧包 ID 与数据目录保留，已安装版本可继续升级。

## 环境与验证范围

需要 Node 22+、DSH CLI 和文件/命令工具；手机需要在安卓 DSH 宿主自身环境运行，不依赖电脑开机。尚未对安卓实机验收，也不承诺没有命令能力的任意聊天应用能自动安装。

当前发布 `0.3.0-preview.17`。安装报告中的 `configurationVerified` 表示宿主配置已接入，重启引擎后才实际加载。安装程序不修改会话、模型密钥或其他插件。

## 源码与许可

完整源码、构建脚本、中文文档和运行资源在同仓库 ZIP 中；MIT 适用于本项目原创代码，第三方图片、声音与依赖按随包 `THIRD_PARTY_NOTICES.md` 及各自许可使用。

更新目录与安装包由公开 HTTPS 更新服务分发，安装器内固定 Ed25519 公钥，包和安装器分别校验 SHA-256。维护者发布密钥不在仓库或客户端中。
