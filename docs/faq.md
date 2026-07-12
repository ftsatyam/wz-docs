# FAQ

## General

### What's the difference between mirror and leech?
**Mirror** = download from internet, upload to cloud storage (Google Drive, Rclone).  
**Leech** = download from internet, send to your Telegram chat.

### What's the difference between `/mirror` and `/qbmirror`?
Both download torrents. `/mirror` uses **Aria2** (lightweight, simple). `/qbmirror` uses **qBittorrent** (full torrent client with web UI, file selection, seeding control).

### Can I run multiple bots?
Yes. Use `HELPER_TOKENS` for parallel task handling, or `CMD_SUFFIX` to run separate instances with different command prefixes (e.g., `/mirrorx`).

---

## Setup

### Why isn't the bot responding?
Check the bot is running: `docker compose ps`. Both `app` and `tunnel` should show `Up`. If not, check logs: `docker compose logs app --tail 20`.

### I get "not authorized" or "unrecognized command"
Make sure you're sending commands to the **right bot** (the one you created with @BotFather). If you're in a group, the bot needs to be added as admin or you need to authorize the chat via `/authorize`.

### How do I find my Telegram user ID?
Send `/start` to [@userinfobot](https://t.me/userinfobot). It will reply with your ID number.

### What MongoDB URL should I use?
From MongoDB Atlas: create a free cluster → click Connect → Connect your application → copy the connection string. It looks like:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### How do I get my API ID and Hash?
Go to [my.telegram.org](https://my.telegram.org/apps), log in with your phone number, and copy the `api_id` and `api_hash`.

---

## Usage

### The web UI isn't loading — how do I find the URL?
```bash
docker compose logs tunnel
```
Look for `https://abc123.trycloudflare.com`. That's your web UI URL.

### My download is stuck at 99%
This usually means the file is being processed (extracting, converting, etc.) or waiting in the upload queue. Check `/status` to see the current phase.

### Google Drive quota exceeded — what now?
Enable service accounts: set `USE_SERVICE_ACCOUNTS = True` in config and upload `accounts.zip` via `/botset` → Private Files.

### How do I upload private files like token.pickle?
Use `/botset` → **Private Files** → **Create New File**. Send the file as a document.

### How do I update the bot?
```bash
docker compose down
docker compose pull
docker compose up -d
```

### Can I download from Instagram?
Yes, if you set `INSTADL_API` in config. See [Download from YouTube & Social Media](/how-to/youtube).

### How do I search for torrents?
Use `/search [query]`. Configure `SEARCH_API_LINK` or `SEARCH_PLUGINS` in config for more results.

---

## Configuration

### How do I change a setting without editing config.py?
Use `/botset` — the bot settings panel. Owner/sudo users can change any variable on the fly.

### Which settings require a restart?
`BOT_TOKEN`, `DATABASE_URL`, `OWNER_ID`, `TELEGRAM_HASH`, `TELEGRAM_API`, `TG_PROXY`, `AUTHORIZED_CHATS`, `CMD_SUFFIX`, `USER_SESSION_STRING`, and `DOWNLOAD_DIR`. The bot will warn you.

### Can I have different settings for different users?
Yes. Users can customize their own experience via `/usetting`. Each user can set their own thumbnail, split size, Rclone config, GDrive token, and more.
