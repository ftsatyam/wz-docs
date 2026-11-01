# Configuration

The bot is configured through `config.py` (a Python file, not `.env`). This page explains every setting in plain English.

---

## Where's the config file?

```bash
# In your HKML-X folder:
cp config_sample.py config.py   # Create it
nano config.py                   # Edit it
```

> **Python syntax rules:**
> - Strings need quotes: `"hello"`
> - Numbers don't: `42`
> - Booleans are capitalized (no quotes): `True`, `False`
> - Lists use brackets: `["a", "b"]`
> - Dicts use braces: `{"key": "value"}`

After editing, restart: `docker compose restart`

---

## Required (bot won't start without these)

| Variable | What it is |
|---|---|
| `BOT_TOKEN` | Your bot's token from [@BotFather](https://t.me/BotFather) |
| `OWNER_ID` | Your Telegram user ID (from [@userinfobot](https://t.me/userinfobot)) |
| `TELEGRAM_API` | API ID from [my.telegram.org](https://my.telegram.org/apps) |
| `TELEGRAM_HASH` | API hash from [my.telegram.org](https://my.telegram.org/apps) |
| `DATABASE_URL` | MongoDB connection string |

---

## Upload destinations

| Variable | What it does | Default |
|---|---|---|
| `DEFAULT_UPLOAD` | Default upload target: `"gd"` (Google Drive) or `"rc"` (Rclone) | `"rc"` |
| `GDRIVE_ID` | Default Google Drive folder ID for uploads | `""` |
| `GD_DESP` | Description text for Google Drive uploads | `"Uploaded with WZ Bot"` |
| `IS_TEAM_DRIVE` | Set to `True` if your GDrive ID is a Team Drive | `False` |
| `STOP_DUPLICATE` | Skip upload if file already exists in GDrive | `False` |
| `INDEX_URL` | Your Google Drive index URL for shareable links | `""` |
| `USE_SERVICE_ACCOUNTS` | Use Google Service Accounts for higher quota | `False` |
| `RCLONE_PATH` | Default Rclone remote path (e.g., `"main:folder"`) | `""` |
| `RCLONE_FLAGS` | Extra Rclone flags (`"key:value\|key"`) | `""` |
| `SHOW_CLOUD_LINK` | Show cloud link button on leeched files | `True` |
| `RCLONE_SERVE_URL` | Public URL for Rclone serve | `""` |
| `RCLONE_SERVE_PORT` | Port for Rclone serve | `8081` |
| `RCLONE_SERVE_USER` | Username for Rclone serve auth | `""` |
| `RCLONE_SERVE_PASS` | Password for Rclone serve auth | `""` |
| `DRIVE_CATEGORY_MODE` | Enable GDrive categories for organizing uploads | `False` |
| `DRIVE_CATEGORY_SA` | Service account to use for drive category uploads | `""` |

---

## Leech settings (uploading to Telegram)

| Variable | What it does | Default |
|---|---|---|
| `LEECH_SPLIT_SIZE` | Max file size per part in bytes (Telegram limit is ~2GB) | `0` (max allowed) |
| `AS_DOCUMENT` | Upload all files as documents (not media) | `False` |
| `EQUAL_SPLITS` | Split into equal-sized parts | `False` |
| `MEDIA_GROUP` | Group split parts as a media album | `False` |
| `TRANSMISSION_MODE` | Who sends leeched files: `"both"`, `"bot"`, or `"user"` | `"both"` |
| `LEECH_PREFIX` | Text added before filename | `""` |
| `LEECH_SUFFIX` | Text added after filename | `""` |
| `LEECH_FONT` | Font style: `"b"`, `"i"`, `"u"`, `"s"`, `"code"`, `"spoiler"` | `""` |
| `LEECH_CAPTION` | Custom caption text for leeched files | `""` |
| `THUMBNAIL_LAYOUT` | Thumbnail layout format (e.g., `"1280x720"`) | `""` |
| `LEECH_DUMP_CHAT` | Chat ID where all leeched files are dumped | `""` |

---

## Limits & queue

| Variable | What it does | Default |
|---|---|---|
| `STATUS_LIMIT` | Max tasks shown in `/status` | `10` |
| `STATUS_UPDATE_INTERVAL` | How often the status message refreshes (seconds) | `15` |
| `QUEUE_ALL` | Max total parallel tasks (download + upload) | `0` (unlimited) |
| `QUEUE_DOWNLOAD` | Max parallel downloads | `0` (unlimited) |
| `QUEUE_UPLOAD` | Max parallel uploads | `0` (unlimited) |
| `BOT_MAX_TASKS` | Max tasks per user (across all users) | `0` (unlimited) |
| `USER_MAX_TASKS` | Max concurrent tasks per user | `0` (unlimited) |
| `USER_TIME_INTERVAL` | Cooldown between tasks per user (seconds) | `0` (disabled) |
| `STORAGE_LIMIT` | Min free disk space to maintain (GB). Downloads cancel if exceeded | `0` (disabled) |

### Per-engine limits (size in GB, 0 = unlimited)

| Variable | Limits |
|---|---|
| `DIRECT_LIMIT` | Direct link downloads |
| `MEGA_LIMIT` | Mega downloads |
| `TORRENT_LIMIT` | Torrent downloads |
| `GD_DL_LIMIT` | Google Drive downloads |
| `RC_DL_LIMIT` | Rclone downloads |
| `CLONE_LIMIT` | Google Drive clone operations |
| `YTDLP_LIMIT` | yt-dlp downloads |
| `PLAYLIST_LIMIT` | Max items from a playlist |
| `LEECH_LIMIT` | Leech (Telegram upload) size |
| `EXTRACT_LIMIT` | Extracted file size |
| `ARCHIVE_LIMIT` | Archive (zip) size |
| `RSS_SIZE_LIMIT` | RSS download size |

---

## User access control

| Variable | What it does |
|---|---|
| `AUTHORIZED_CHATS` | User/Chat IDs allowed to use the bot (space-separated) |
| `SUDO_USERS` | User IDs with admin powers (space-separated) |
| `FORCE_SUB_IDS` | Channel/Group IDs users must join before using (space-separated) |
| `BOT_PM` | Force files/links to be sent via bot PM |
| `VERIFY_TIMEOUT` | Verification timeout in seconds |
| `LOGIN_PASS` | Password to skip verification (leave empty to disable) |

---

## Web UI

| Variable | What it does | Default |
|---|---|---|
| `BASE_URL` | Public URL for torrent file selection web UI | `""` |
| `WEB_PINCODE` | Require a pincode to access the web UI | `True` |
| `WEB_ACCESS_PASSWORD` | Secret for deriving web passwords | `""` (auto-generated) |

---

## Appearance

| Variable | What it does | Default |
|---|---|---|
| `TIMEZONE` | Timezone for timestamps | `"Asia/Kolkata"` |
| `DEFAULT_LANG` | Bot language code | `"en"` |
| `AUTHOR_NAME` | Author name shown on Telegraph pages | `"HKML-X"` |
| `AUTHOR_URL` | Author link | `"https://t.me/HKML_X"` |
| `USE_IMAGES` | Enable random photo backgrounds on messages | `False` |
| `IMG_SEARCH` | Comma-separated keywords to auto-fetch wallpapers | `""` |
| `IMG_PAGE` | Number of pages to search for images | `1` |
| `IMG_SOURCES` | Image source sites: `["wallpaperflare"]` | `["wallpaperflare"]` |
| `IMAGES` | The gallery itself. Don't edit by hand — use `/addimage` and `/images` | `[]` |
| `IMDB_TEMPLATE` | HTML template for IMDB search results | (built-in) |
| `COLORED_BTNS` | Use colored inline buttons | `False` |

---

## Feature toggles

Set `True` to **disable** a feature:

| Variable | What it disables | Default |
|---|---|---|
| `DISABLE_TORRENTS` | All torrent downloads | `False` |
| `DISABLE_LEECH` | All leech tasks (`/leech`, `/qbleech`, ...) | `False` |
| `DISABLE_MIRROR` | All mirror tasks (`/mirror`, `/qbmirror`, ...) | `False` |
| `DISABLE_BULK` | The `-b` flag — many links from one message | `False` |
| `DISABLE_MULTI` | The `-i` flag — multiple replied links | `False` |
| `DISABLE_SEED` | The `-d` flag — seeding after torrent download | `False` |
| `DISABLE_FF_MODE` | The `-ff` flag — FFmpeg processing | `False` |
| `DISABLE_MEGA` | Mega.nz downloads | `False` |
| `DISABLE_RSS` | RSS feed monitoring | `False` |
| `DISABLE_SEARCH` | Torrent search | `False` |
| `DISABLE_YTDLP` | yt-dlp downloads (YouTube, social media) | `False` |

---

## Download engines

### qBittorrent / Aria2

| Variable | What it does | Default |
|---|---|---|
| `TORRENT_TIMEOUT` | Dead torrent timeout (seconds) | `0` (disabled) |
| `CPU_LIMIT` | CPU limit for background services | `20` |
| `THROTTLE_SERVICES` | Pause services during heavy operations: `"auto"` or `"off"` | `"auto"` |

> `BASE_URL` and `WEB_PINCODE` are documented under [Web UI](#web-ui) above.

### Mega

| Variable | What it does |
|---|---|
| `MEGA_EMAIL` | Mega account email |
| `MEGA_PASSWORD` | Mega account password |
| `DISABLE_MEGA` | Disable Mega entirely | `False` |

---

## Filename & processing

| Variable | What it does |
|---|---|
| `NAME_SWAP` | Rename files using pattern: `"old:new\|old2:new2"` |
| `FFMPEG_CMDS` | Custom FFmpeg command presets (dict format) |
| `UPLOAD_PATHS` | Custom upload paths per file extension (dict format) |
| `EXCLUDED_EXTENSIONS` | File extensions to skip (space-separated, no dots) |
| `CMD_SUFFIX` | Text appended to all commands (e.g., `"x"` → `/mirrorx`) |
| `SET_COMMANDS` | Auto-register bot commands with Telegram on start | `True` |

---

## Debrid & DDL services

| Variable | What it does |
|---|---|
| `FILELION_API` | FileLion API key |
| `STREAMWISH_API` | StreamWish API key |
| `ALLDEBRID_API_KEY` | AllDebrid API key. Powers the `-ad` flag on `/mirror` and `/leech` |
| `DEBRID_LINK_API` | Debrid-Link API key |
| `GOFILE_API` | Gofile.io API token |
| `GOFILE_FOLDER_ID` | Gofile.io folder ID |
| `GOFILE_AUTO_CREATE_FOLDER` | Auto-create a new folder per upload on Gofile | `False` |
| `PIXELDRAIN_KEY` | PixelDrain API key |
| `PROTECTED_API` | ProtectedFiles API key |
| `BUZZHEAVIER_API` | BuzzHeavier API key |
| `DEVUPLOADS_KEY` | DevUploads API key |
| `DEVUPLOADS_FOLDER` | DevUploads folder ID |
| `VIKINGFILE_HASH` | VikingFile.to hash |
| `VIKINGFILE_FOLDER` | VikingFile folder name |
| `VIKINGFILE_FOLDER` | VikingFile.to folder ID |
| `INSTADL_API` | Instagram downloader API key |

---

## RSS

| Variable | What it does | Default |
|---|---|---|
| `RSS_DELAY` | Check interval in seconds | `600` |
| `RSS_CHAT` | Default chat ID for RSS notifications | `""` |
| `RSS_SIZE_LIMIT` | RSS download size limit (GB) | `0` |

---

## Torrent search

| Variable | What it does |
|---|---|
| `SEARCH_API_LINK` | Search API app URL for multi-search |
| `SEARCH_LIMIT` | Max results per site | `0` |
| `SEARCH_PLUGINS` | List of qBittorrent search plugin URLs |

---

## Logging

| Variable | What it does |
|---|---|
| `MIRROR_LOG_ID` | Chat ID for mirror logs |
| `LINKS_LOG_ID` | Chat ID for link logging |
| `LEECH_DUMP_CHAT` | Chat ID where leeched files are dumped |
| `MEDIA_STORE` | Store media metadata for re-upload | `True` |
| `DELETE_LINKS` | Auto-delete source links on task start | `False` |

---

## Updates

| Variable | What it does | Default |
|---|---|---|
| `UPSTREAM_REPO` | Your GitHub fork URL for auto-updates | `""` |
| `UPSTREAM_BRANCH` | Branch to track for updates | `"master"` |

---

## Advanced / Hyper TG Downloader

| Variable | What it does | Default |
|---|---|---|
| `USE_HYPER` | Enable Hyper DL/UP for faster Telegram transfers | `True` |
| `ENABLE_TELEMETRY` | Send crash reports to remote worker for debugging | `True` |
| `HELPER_TOKENS` | Extra bot tokens for parallel Telegram transfers (space-separated) | `""` |
| `HELPER_STRINGS` | Extra user session strings, paired with the helper bots | `""` |
| `HELPER_BOT_PROXIES` | Proxies for the helper bot tokens | `""` |
| `HELPER_USER_PROXIES` | Proxies for the helper user sessions | `""` |
| `USER_SESSION_STRING` | Pyrogram session string for user account tasks | `""` |
| `HYPER_THREADS` | Number of parallel download parts | `0` (auto) |
| `HYPER_PIPELINE` | Concurrent GetFile requests per part | `4` |
| `HYPER_CHUNK` | Download chunk size (bytes) | `524288` |
| `TG_PROXY` | SOCKS5 proxy for Telegram: `{"scheme": "socks5", "hostname": "...", "port": 1234}` | `{}` |
| `INC_TASK_NOTIFY` | Notify about incomplete tasks on restart | `False` |
| `INC_TASK_RESUME` | Auto-resume incomplete tasks on restart | `False` |

---

## YouTube upload settings

| Variable | What it does | Default |
|---|---|---|
| `YT_DESP` | Description for YouTube uploads | `"Uploaded with HKML-X bot"` |
| `YT_TAGS` | Tags for YouTube uploads | `["telegram", "bot", "youtube"]` |
| `YT_CATEGORY_ID` | YouTube category ID | `22` |
| `YT_PRIVACY_STATUS` | Privacy: `"public"`, `"unlisted"`, or `"private"` | `"unlisted"` |
| `YT_DLP_OPTIONS` | Default yt-dlp options (`"key:value\|key:value"`) | `""` |
