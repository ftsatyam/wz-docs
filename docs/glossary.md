# Word List

Every confusing word in these docs, in plain English.

---

## The two words you must know

**Mirror**
Bot downloads a file, then puts it in your **cloud storage** (Google Drive, etc.).
Command: `/mirror`

**Leech**
Bot downloads a file, then sends it to you **on Telegram**.
Command: `/leech`

That's the only difference. Everything else works the same.

---

## Words about the bot

**Owner**
The one person whose Telegram ID is in `OWNER_ID`. Can do everything.

**Sudo**
A helper the owner promoted with `/addsudo`. Can do almost everything.

**Authorized**
A user or group the owner allowed with `/authorize`. Can use normal commands only.

**Task**
One job you gave the bot. One link = one task.

**GID**
The short ID of a task, like `a1b2c3d4`. Shows up in `/status`. Used in `/c_a1b2c3d4` to cancel that one task.

**Queue**
The waiting line. If the bot is busy, your task waits its turn. `-f` skips the line.

**Flag** (also "argument", "arg")
A short option you stick on the end of a command. Starts with a dash. Example: `-n`, `-e`, `-up`.

---

## Words about downloading

**Direct link**
A normal URL that starts downloading when you click it. `https://site.com/file.zip`

**Magnet**
A torrent link that starts with `magnet:?xt=urn:btih:`. Copy the whole thing.

**Seeding**
Sharing a torrent back to other people after you finish downloading. Costs you upload bandwidth. `-d` controls it.

**Ratio**
How much you've uploaded compared to downloaded. Ratio 1.0 = you gave back as much as you took.

**Aria2**
A small, fast downloader. Handles direct links and simple torrents. Used by `/mirror` and `/leech`.

**qBittorrent** (qbit)
A full torrent program. Better for torrents — lets you pick files and control seeding. Used by `/qbmirror` and `/qbleech`.

**JDownloader** (JD)
Handles premium file hosts (Rapidgator, Uploaded...). Uses a lot of RAM, so it's **off by default**.

**SABnzbd** / **NZB** / **Usenet**
A separate paid file network, not torrents. Also **off by default**.

**yt-dlp**
The tool that downloads from YouTube and ~1000 other video sites. Used by `/ytdl` and `/ytdlleech`.

**Debrid** (AllDebrid, Debrid-Link)
A paid service that turns slow file-host links into fast ones. Add `-ad` to use AllDebrid.

---

## Words about uploading

**Rclone**
A tool that talks to 40+ cloud services (Drive, Dropbox, OneDrive, S3...). You give the bot an `rclone.conf` file.

**Remote**
One cloud account inside your `rclone.conf`. Written as `name:folder` — e.g. `mydrive:Movies`.

**token.pickle**
The file that proves you own a Google Drive account. Upload it via `/botset` → Private Files.

**Service Account** (SA)
A robot Google account. Using many of them spreads out Google's daily upload limit. Uploaded as `accounts.zip`.

**Team Drive** / **Shared Drive**
A Google Drive owned by a group, not one person. Set `IS_TEAM_DRIVE = True` if you use one.

**Index URL**
A website that lists your Google Drive files so people can download without a Google account.

**DDL** (Direct Download Link)
A file host like Gofile or PixelDrain. `/uphoster` uploads there.

**Uphoster**
This bot's word for "upload to a DDL host".

**Dump chat**
A channel where the bot copies every leeched file, so you have a backup.

---

## Words about files

**Split**
Cutting a big file into pieces because Telegram caps uploads at 2GB (4GB with Premium). Automatic.

**Document mode**
File sent raw, no preview. Flag: `-doc`

**Media mode**
Video/photo sent so it plays inside Telegram. Flag: `-med`

**Thumbnail**
The little preview image on a file.

**FFmpeg**
The tool that converts, cuts, and re-packs video and audio. Flag: `-ff`

**Metadata**
Hidden text inside a media file — title, artist, language. Flag: `-meta`

**Name swap**
Find-and-replace on filenames. Flag: `-ns`

---

## Words about running the bot

**VPS**
A rented computer that stays on 24/7. That's where the bot lives.

**Docker**
Software that runs the bot in a sealed box, so you don't install 50 things by hand.

**docker compose**
The command that starts and stops that box.

**config.py**
The one file holding all your settings. You make it by copying `config_sample.py`.

**MongoDB**
The database where the bot remembers your settings between restarts.

**Tunnel** (Cloudflare)
Gives your bot a public web address without you owning a domain. Needed for the file-picker page.

**BASE_URL**
That public web address, pasted into your config.

**Session string**
A long code that lets the bot act as *your* Telegram account instead of the bot account. Needed for private channels and 4GB uploads.

---

## Prefixes you'll see in commands

These go **in front of** a link or ID, with no space.

| Prefix | Means |
|---|---|
| `mtp:` | use **my** Google token (the one I uploaded in `/userset`) |
| `mrcc:` | use **my** rclone config |
| `tp:` | use the owner's `token.pickle` |
| `sa:` | use service accounts |
| `b:` | send it using the **bot** account |
| `u:` | send it using the **user** account |
| `h:` | hybrid — bot for small files, user for big ones |

Example: `/mirror LINK -up mrcc:mydrive:Movies`
