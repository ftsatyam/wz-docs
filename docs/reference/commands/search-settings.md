# Search & Settings Commands Reference

## Search Commands

| Command | Alias | What it does |
|---|---|---|
| `/search [query]` | — | Search torrent sites (qBittorrent plugins / API) |
| `/list [query]` | — | Search files in Google Drive |
| `/imdb [title/id]` | — | Look up movie/TV on IMDB |

## Settings & Management Commands

| Command | Alias | What it does | Who |
|---|---|---|---|
| `/usetting` | `/us` | Open personal settings panel | All users |
| `/bsetting` | `/bs` | Open bot settings panel | Owner/Sudo |
| `/category` | `/ctsel` | Open upload category selection | All users |
| `/rss` | — | Open RSS feed management | All users |

## File Management Commands

| Command | Alias | What it does |
|---|---|---|
| `/status` | `/s` | Show active/queued tasks |
| `/statusall` | — | Show tasks across all instances (ignores `CMD_SUFFIX`) |
| `/stats` | `/st` | Show bot/system statistics |
| `/c_[gid]` | — | Cancel one task. Tap the link in `/status` — plain `/cancel` does nothing |
| `/cancelall [type]` | `/call` | Cancel all tasks (all/mirror/leech/upload) |
| `/forcestart [gid]` | `/fs` | Force a queued task to start |
| `/sel_[gid]` | — | Open file selection for a torrent. Tap the link in `/status` |
| `/mediainfo [file]` | `/mi` | Get MediaInfo of a file |
| `/help` | `/h` | Show help / command list |
| `/ping` | — | Check if bot is alive |
| `/login [password]` | — | Login with password |
| `/start` | — | Welcome message |

See [User Settings](/settings/user) for all `/usetting` options.
See [Bot Settings](/settings/bot) for all `/bsetting` options.
