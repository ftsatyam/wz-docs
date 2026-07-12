# Automate with RSS

The bot can watch RSS feeds and automatically download new content as it's published. Think of it as a subscription — new episodes, files, or releases arrive without you doing anything.

## Adding a feed

```
/rss
```

This opens the RSS management menu. Click **Add** and enter:

1. **Title** — any name you'll recognize (e.g., "My TV Show")
2. **URL** — the RSS feed link
3. **Command** (optional) — what to do with each new item

---

## Command filters

When adding a feed, you can add arguments that apply to every download:

```
-c mirror              # what command to run (mirror, leech, etc.)
-up mrcc:remote:path   # where to upload
-rcf --buffer-size:8M  # rclone flags
-d 1.0:30              # seed ratio/time
-z mypassword          # zip with password
```

---

## Content filters: include and exclude

Control which items to download based on their title:

```
Title https://example.com/rss -inf 1080 or 720|mkv or mp4 -exf flv
```

| Filter | What it does | Example |
|---|---|---|
| `-inf` | Only download if title contains these words | `-inf 1080 or 720` |
| `-exf` | Skip if title contains these words | `-exf flv` |

**Filter rules:**
- `|` means **AND** — both words must be present
- `or` means **OR** — either word is enough
- Example: `-inf 1080 or 720|mkv or mp4` means title must contain (1080 OR 720) AND (mkv OR mp4)

**Case-sensitive mode:**

Add `-stv true` to make filters case-sensitive (default is case-insensitive).

---

## Managing feeds

From the `/rss` menu you can:

- **List** all feeds
- **Pause/Resume** individual feeds
- **Remove** a feed
- **Edit** feed settings

---

## Configuration

| Variable | What it does | Default |
|---|---|---|
| `RSS_DELAY` | How often to check feeds (seconds) | `600` (10 min) |
| `RSS_CHAT` | Chat ID for RSS notifications | `""` |
| `RSS_SIZE_LIMIT` | Max download size per RSS item (GB) | `0` (unlimited) |
