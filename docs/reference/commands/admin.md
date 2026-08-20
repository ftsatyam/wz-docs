# Admin Commands Reference

**Owner** = the user set in `OWNER_ID`. **Sudo** = users added via `/addsudo`.

| Command | Alias | What it does | Who |
|---|---|---|---|
| `/botset` | `/bs` | Open bot settings panel | Owner/Sudo |
| `/authorize [id]` | `/a` | Allow a chat/user to use the bot | Owner/Sudo |
| `/unauthorize [id]` | `/ua` | Remove authorization | Owner/Sudo |
| `/users` | — | List all users and their settings | Owner/Sudo |
| `/addsudo [id]` | `/as` | Add a sudo user (admin) | Owner only |
| `/rmsudo [id]` | `/rs` | Remove a sudo user | Owner only |
| `/blacklist [id]` | `/bl` | Ban a user from the bot | Owner/Sudo |
| `/rmblacklist [id]` | `/rbl` | Unban a user | Owner/Sudo |
| `/restart` | `/r` | Restart the bot | Owner/Sudo |
| `/restartall` | — | Restart all bot instances | Owner/Sudo |
| `/restartses` | `/rses` | Restart user sessions only | Owner/Sudo |
| `/log` | — | Get bot log file | Owner/Sudo |
| `/exportsession` | — | Generate a Pyrogram string session | Owner/Sudo |
| `/broadcast [msg]` | `/bc` | Send a message to all users | Owner only |
| `/shell [cmd]` | — | Run a shell command | Owner only |
| `/exec [code]` | — | Execute Python code | Owner only |
| `/aexec [code]` | — | Execute async Python code | Owner only |
| `/clearlocals` | — | Clear exec locals | Owner only |
| `/plugins` | — | Plugin manager (load/unload/enable plugins) | Owner only |
| `/speedtest` | — | Test internet speed (**plugin** — only if loaded via `/plugins`) | Owner/Sudo |
| `/addimage` | `/ai` | Add image to gallery | Owner/Sudo |
| `/images` | `/img` | View/manage image gallery | Owner/Sudo |
| `/gdclean` | `/gdc` | Clean Google Drive files | Owner/Sudo |
| `/count [link]` | — | Count files in GDrive folder | Owner/Sudo |
| `/del [link]` | — | Delete files from GDrive | Owner/Sudo |

See [Bot Settings](/settings/bot) for detailed explanations of every `/botset` option.
