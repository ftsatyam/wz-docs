# Save Files to Cloud

You want a file from the internet saved to Google Drive, Rclone, or another cloud storage. This is called **mirroring**.

> You need a cloud drive set up first. If you haven't done that, see [Upload Destinations](/upload-destinations) first.

## The basic command

```
/mirror https://example.com/file.zip
```

The bot downloads the file and uploads it to your default cloud destination.

---

## Which command to use

| If you have this... | Use this | Best for |
|---|---|---|
| A direct download link | `/mirror` (or `/m`) | HTTP links, normal downloads |
| A torrent magnet | `/qbmirror` (or `/qm`) | Torrents (better handling) |
| A YouTube link | `/ytdl` (or `/y`) | YouTube, social media, streams |
| A premium hoster link | `/jdmirror` (or `/jm`) | Rapidgator, etc. via JDownloader |
| An NZB link | `/nzbmirror` (or `/nm`) | Usenet downloads |
| A Google Drive link | `/clone` (or `/cl`) | Copy between Drives (no download) |

---

## Choose where the file goes

By default the file goes to your default destination (set in config). To pick a different one:

```
/mirror link -up rcl                # opens a menu to pick Rclone path
/mirror link -up gdl                # opens a menu to pick GDrive folder
/mirror link -up remote:path        # upload directly to Rclone path
/mirror link -up gdrive_folder_id   # upload directly to a GDrive folder
/mirror link -up pm                 # send to your Telegram PM instead
```

**Using your personal upload settings** (set in `/userset`):

```
/mirror link -up mrcc:remote:path   # use YOUR Rclone config
/mirror link -up mtp:gdrive_id      # use YOUR GDrive token
```

---

## Rename the file

```
/mirror link -n myfile.mp4
```

---

## Extract or compress

```
/mirror link -e                     # extract zip/rar/7z (with auto-detect)
/mirror link -e mypassword          # extract with password
/mirror link -z                     # compress to zip
/mirror link -z mypassword          # compress with password
/mirror link -e -z                  # extract first, then zip the result
```

---

## Pick files from a torrent

```
/qbmirror magnet:?xt=urn:btih:xxxx -s
```

This opens a web page where you can choose which files to download. You'll get a link in the bot's reply.

If you already started the download without `-s`, use `/select` later to open the menu.

---

## Torrent seeding

Keep sharing the file after it finishes downloading:

```
/mirror link -d 1.0:30    # seed until ratio 1.0 OR 30 minutes
/mirror link -d 1.0       # seed until ratio 1.0
/mirror link -d :30       # seed for 30 minutes
```

---

## Clone with sync (copy between Drives)

When cloning a Google Drive folder, use `-sync` to mirror the source (copy new/changed files instead of copying everything):

```
/clone https://drive.google.com/drive/folders/xxxx -sync
```

---

## Download multiple things at once

**Multi-link mode** — download several links in sequence:

```
/mirror -i 3
```

The bot will ask you to reply with 3 links, one by one.

**Bulk mode** — download many links from a single message or file:

```
/mirror -b
```

Reply to a message where each line is a link. Each link can have its own options:

```
https://link1.com -n video.mp4
https://link2.com -z
https://link3.com -e
```

---

## More options

| You want to... | Add this |
|---|---|
| Split into smaller parts | `-sp 500mb` |
| Change thumbnail | `-t https://example.com/thumb.jpg` |
| Convert audio | `-ca mp3` |
| Convert video | `-cv mp4` |
| Take screenshots | `-ss 6` |
| Add metadata | `-meta title=MyMovie\|artist=Me` |
| Skip the queue | `-f` (force start) |
| Pass rclone flags | `-rcf --buffer-size:8M` |

Each of these is detailed in [Process Files](/how-to/process).
