# Download Torrents

The bot can download torrents using two engines: **Aria2** (lightweight) or **qBittorrent** (full-featured).

## Which engine to use

| Engine | Command | Best when... |
|---|---|---|
| **Aria2** | `/mirror [magnet/torrent]` | You just want the file, no fuss |
| **qBittorrent** | `/qbmirror [magnet/torrent]` | You need file selection, seeding control, or web UI |

---

## The basic command

```
/mirror magnet:?xt=urn:btih:xxxxxxxxxxxxxxxxxxxx
```

You can also upload a `.torrent` file directly to the bot and reply with the command.

---

## Choose which files to download

Torrents often contain many files. To pick only what you want:

```
/qbmirror magnet:?xt=urn:btih:xxxx -s
```

The bot gives you a link to a web page where you can check/uncheck files.

**No web UI?** You can also select files directly in Telegram:

```
/select [task id]
```

Or reply to the task message with `/select`.

---

## Seed after download

By default, the bot stops seeding when the download finishes. To keep sharing:

```
/mirror link -d 1.0:30
```

Format: `ratio:minutes`. The bot seeds until the ratio OR the time limit is reached, whichever comes first.

| Example | What it does |
|---|---|
| `-d 1.0:30` | Seed until ratio 1.0 or 30 minutes |
| `-d 2.0` | Seed until ratio 2.0 (no time limit) |
| `-d :60` | Seed for 60 minutes (no ratio limit) |

---

## Stuck or slow torrents

Set a timeout in config so dead torrents auto-cancel:

```python
TORRENT_TIMEOUT = 3600   # cancel after 1 hour (in seconds)
```

---

## Web UI setup

The file selection UI runs on your server. To access it:

1. Find your tunnel URL:
   ```bash
   docker compose logs tunnel
   ```
   Look for `https://abc123.trycloudflare.com`.

2. Set it in config:
   ```python
   BASE_URL = "https://abc123.trycloudflare.com"
   WEB_PINCODE = True   # recommended — adds password protection
   ```
