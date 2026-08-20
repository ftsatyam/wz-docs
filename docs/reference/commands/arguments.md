# Arguments Reference

Arguments (also called "flags") are short options you stick on the **end** of a command
to change what the bot does. They always start with a dash.

```
/mirror https://example.com/file.zip -n newname.zip -e
         ^ the link                   ^ flag  ^ flag
```

You can stack as many as you want. Order doesn't matter.

> New here? The [Cheat Sheet](/cheatsheet) covers the 8 flags most people ever need.

---

## All Arguments

### `-n` — New name
Rename the file before upload.
```
/mirror link -n myfile.mp4
```

### `-up` — Upload destination
Choose where the file goes.
```
/mirror link -up rcl                # Rclone (button menu)
/mirror link -up gdl                # Google Drive (button menu)
/mirror link -up remote:path        # Direct Rclone path
/mirror link -up gdrive_id          # Direct GDrive folder ID
/mirror link -up pm                 # Telegram PM
/mirror link -up @username          # Telegram chat
/mirror link -up id|topic_id        # Forum topic
/mirror link -up mrcc:remote:path   # Your Rclone config (from /userset)
/mirror link -up mtp:gdrive_id      # Your GDrive token (from /userset)
/mirror link -up tp:gdrive_id       # Owner's token.pickle
/mirror link -up sa:gdrive_id       # Service accounts
```

### `-z` — Zip
Compress files to zip (optional password).
```
/mirror link -z
/mirror link -z mypassword
```

### `-e` — Extract
Extract archives (zip, rar, 7z, tar, gz, bz2, xz).
```
/mirror link -e
/mirror link -e mypassword
```

### `-e -z` — Extract then Zip
```
/mirror link -e -z
```

### `-sp` — Split size
Split into smaller parts.
```
/mirror link -sp 500mb
/mirror link -sp 2gb
```

### `-s` — Select files
Open file selection for torrents, NZBs, or JDownloader.
```
/qbmirror link -s
```

### `-t` — Thumbnail
Set a custom thumbnail.
```
/mirror link -t https://example.com/thumb.jpg
/mirror link -t none
```

### `-d` — Seed torrent
Keep seeding after download. Format: `ratio:minutes`.
```
/mirror link -d 1.0:30
```

### `-i` — Multi-link
Download multiple links in sequence.
```
/mirror -i 3
```

### `-b` — Bulk mode
Download many links from one message/file.
```
/mirror -b
/mirror -b 2:5           # links 2 to 5 only
```

### `-m` — Same directory
Put all downloads into one folder.
```
/mirror -i 3 -m "Folder Name"
```

### `-sv` — Sample video
Create a short sample clip. Format: `duration:part_length`.
```
/mirror link -sv         # default 60:4
/mirror link -sv 30:5
```

### `-ss` — Screenshots
Take screenshots from a video.
```
/mirror link -ss         # default 10
/mirror link -ss 6
```

### `-ca` — Convert audio
```
/mirror link -ca mp3
/mirror link -ca mp3 + flac ogg    # only these formats
```

### `-cv` — Convert video
```
/mirror link -cv mp4
/mirror link -cv mkv - webm flv    # skip these formats
```

### `-doc` / `-med` — Leech type
Force document or media mode.
```
/leech link -doc         # raw file, no preview
/leech link -med         # media with preview
```

### `-f` / `-fd` / `-fu` — Force start
Skip the queue.
```
/mirror link -f          # force both download and upload
/mirror link -fd         # force download only
/mirror link -fu         # force upload only
```

### `-ff` — FFmpeg commands
```
/mirror link -ff ["-i mltb.mkv -c copy -c:s srt mltb.mkv"]
```

### `-meta` — Metadata
```
/mirror link -meta title=MyMovie|artist=Singer
```

### `-ns` — Name swap
Replace text in filenames. Format: `old/new/s` (s = case-sensitive).
```
/mirror link -ns script/code
```

### `-rcf` — Rclone flags
```
/mirror link -rcf --buffer-size:8M|--drive-starred-only
```

### `-hl` / `-bt` / `-ut` — Transmission mode
```
/leech link -hl          # hybrid (bot + user)
/leech link -bt          # bot only
/leech link -ut          # user only
```

### `-tl` — Thumbnail layout
```
/mirror link -tl 3x3
```

### `-opt` — yt-dlp options (JSON)
```
/ytdl link -opt {"format":"best"}
```

### `-au` / `-ap` — Auth username/password
```
/mirror link -au myuser -ap mypass
```

### `-h` — Custom HTTP headers
```
/mirror link -h "key: value"
```

### `-j` — Join split files
Joins .001, .002, etc. parts.
```
/mirror link -j -m "folder"
```

### `-sync` — Sync mode (clone only)
Use sync instead of copy for clone operations.
```
/clone link -sync
```

### `-ad` — AllDebrid
Route the link (or magnet, or replied `.torrent`) through AllDebrid first. Unlocks
premium hosts like 1fichier, rapidgator and mega, and downloads torrents from
AllDebrid's servers instead of aria2/qBittorrent.
```
/mirror https://1fichier.com/?abc -ad
/leech magnet:?xt=urn:btih:... -ad
```
Needs `ALLDEBRID_API_KEY` set. Without it the task fails with
`ALLDEBRID_API_KEY is not configured`. Magnets give up after 3 minutes with no
seeders, or 2 hours overall.

### `-gc` — Google Drive category
Upload into one of the named categories the owner set up (see `categories.txt` /
`DRIVE_CATEGORY_MODE`).
```
/mirror link -gc Movies
```

### `-yt` — Upload to YouTube
Send the finished video to YouTube instead of a normal destination.
Needs YouTube credentials set up first — see [YouTube Upload](/advanced/youtube-upload).
```
/mirror link -yt
```

---

## Compatibility Table

| Arg | Mirror | Leech | YTDL | Clone |
|---|---|---|---|---|
| `-n` | Yes | Yes | Yes | No |
| `-up` | Yes | Yes | Yes | Yes |
| `-z` | Yes | Yes | Yes | No |
| `-e` | Yes | Yes | No | No |
| `-sp` | Yes | Yes | Yes | No |
| `-s` | Yes | Yes | Yes (quality) | No |
| `-t` | Yes | Yes | Yes | No |
| `-d` | Yes | Yes | No | No |
| `-i` | Yes | Yes | Yes | Yes |
| `-b` | Yes | Yes | Yes | Yes |
| `-m` | Yes | Yes | Yes | No |
| `-sv` | Yes | Yes | Yes | No |
| `-ss` | Yes | Yes | Yes | No |
| `-ca` | Yes | Yes | Yes | No |
| `-cv` | Yes | Yes | Yes | No |
| `-doc` | Yes | Yes | Yes | No |
| `-med` | Yes | Yes | Yes | No |
| `-f` | Yes | Yes | Yes | No |
| `-fd` | Yes | Yes | Yes | No |
| `-fu` | Yes | Yes | Yes | No |
| `-ff` | Yes | Yes | Yes | No |
| `-meta` | Yes | Yes | Yes | No |
| `-ns` | Yes | Yes | Yes | No |
| `-rcf` | Yes | Yes | Yes | Yes |
| `-hl` | Yes | Yes | Yes | No |
| `-bt` | Yes | Yes | Yes | No |
| `-ut` | Yes | Yes | Yes | No |
| `-tl` | Yes | Yes | Yes | No |
| `-opt` | No | No | Yes | No |
| `-au` | Yes | Yes | No | No |
| `-ap` | Yes | Yes | No | No |
| `-h` | Yes | Yes | No | No |
| `-j` | Yes | Yes | No | No |
| `-sync` | No | No | No | Yes |
| `-ad` | Yes | Yes | No | No |
| `-gc` | Yes | Yes | Yes | No |
| `-yt` | Yes | Yes | No | No |
