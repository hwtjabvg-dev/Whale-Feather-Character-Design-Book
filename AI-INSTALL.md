# AI installation protocol

Official repository: https://github.com/hwtjabvg-dev/Whale-Feather-Character-Design-Book
Product: Whale Feather Character Design Book; package ID: dsh-persona-book.

Run only when the user requests installing this plugin. Public installation: do not ask for an installation password, device authorization, VPN or proxy configuration.

1. Keep the current HOME, DSH_HOME, DSH_AGENTS_HOME and existing DSH profile. Require Node >=22, DSH CLI, and file/command tools. If unavailable, report the actual missing capability.
2. Download install.mjs from this repository main branch, inspect it, save to a temporary path and run `node install.mjs`. The bootstrap verifies the Ed25519-signed release and installer SHA-256 before execution. The verified installer downloads and validates the complete plugin package, then runs `dsh plugin --profile web add link:<installed-root> --offline --ignore-scripts` and checks the composed host configuration.
3. Optional flags: `--profile web`, `--dsh-executable <path>`, `--dsh-entry <cli-script>`. For desktop Electron DSH, create a temporary Node wrapper that spawns the installed Electron executable with ELECTRON_RUN_AS_NODE=1 and the existing DSH CLI entry, then supply Node as --dsh-executable and the wrapper as --dsh-entry. Never fabricate a host installation path.
4. Report the returned actual version, registered and configurationVerified. restartRequired means restart the DSH engine before claiming activation. Do not change user conversations, model keys or unrelated plugins.
5. Android installation runs within the phone DSH environment, without a PC. A generic mobile AI app without command and file tools cannot install this plugin. Physical Android verification remains pending.
6. Updates use the same public signed feed embedded in the installer. The plugin displays an available update, user clicks to install and restarts the engine. Preserve user data. A locally installed legacy name-discovery skill should be replaced only when it carries this plugin's own v2/v3 marker.

Signed feed: https://whale-persona-book-updates.spryhare5.chatgpt.site/latest.json
Installation metadata: https://whale-persona-book-updates.spryhare5.chatgpt.site/install.json
