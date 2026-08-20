# Cheat Sheet

One page. Find what you want to do, copy the command, change the link.

> **Rule for every command:** type the command, a space, then paste your link.
> `/leech https://example.com/file.zip`

---

## "I want the file in my Telegram chat"

| I have... | Type this |
|---|---|
| A download link | `/leech LINK` |
| A YouTube video | `/ytdlleech LINK` |
| A torrent magnet | `/qbleech magnet:?xt=...` |
| A `.torrent` file | Send the file, then reply to it with `/qbleech` |
| A link from Rapidgator/1fichier/etc. | `/leech LINK -ad` |
| An NZB (Usenet) | `/nzbleech LINK` |

## "I want the file in my Google Drive / cloud"

Same commands, drop the word `leech`:

| I have... | Type this |
|---|---|
| A download link | `/mirror LINK` |
| A YouTube video | `/ytdl LINK` |
| A torrent magnet | `/qbmirror magnet:?xt=...` |
| A Google Drive link (make a copy) | `/clone LINK` |

> Cloud has to be set up first → [Upload Destinations](/upload-destinations)

## "I want a public download link"

```
/uphoster LINK
```

Or reply to a file with `/uphoster`. Gives you a Gofile / PixelDrain / etc. link.

---

## The 8 extras you'll actually use

Stick these on the **end** of any command.

| I want to... | Add | Full example |
|---|---|---|
| Rename it | `-n NAME` | `/leech LINK -n movie.mp4` |
| Unzip it | `-e` | `/leech LINK -e` |
| Unzip with password | `-e PASS` | `/leech LINK -e hunter2` |
| Zip it | `-z` | `/mirror LINK -z` |
| Pick files in a torrent | `-s` | `/qbleech magnet:... -s` |
| Send to my DMs | `-up pm` | `/leech LINK -up pm` |
| Skip the queue | `-f` | `/mirror LINK -f` |
| Set a thumbnail | `-t IMGURL` | `/leech LINK -t https://i.imgur.com/x.jpg` |

[Every flag →](/reference/commands/arguments)

---

## Watching and stopping things

| I want to... | Type this |
|---|---|
| See what's downloading | `/status` |
| Cancel one task | Tap the `/c_xxxxx` link in the status message |
| Cancel everything | `/cancelall` |
| Start a queued task now | `/forcestart` (reply to the task) |
| See server health | `/stats` |
| Check the bot is alive | `/ping` |

> Cancelling only works from the tap-link (`/c_xxxxx`). Plain `/cancel` does nothing.

---

## Changing your own settings

```
/userset
```

Buttons only. Nothing you set here affects other people.

Common things people set:

| I want... | Go to |
|---|---|
| My own thumbnail on every file | Leech Settings → Thumbnail |
| Files sent to my channel | Leech Settings → Leech Destination |
| Files in my own Google Drive | Mirror Settings → GDrive Tools |
| Text added to every filename | Leech Settings → Leech Prefix |

[All of `/userset` →](/settings/user)

---

## Owner-only

```
/botset      change any setting without touching the server
/log         download the bot's log file
/restart     restart the bot
/authorize   let a chat or user use the bot
```

[All of `/botset` →](/settings/bot)

---

## Two-letter shortcuts

Every long command has a short one.

| Long | Short |
|---|---|
| `/mirror` | `/m` |
| `/leech` | `/l` |
| `/qbmirror` | `/qm` |
| `/qbleech` | `/ql` |
| `/ytdl` | `/y` |
| `/ytdlleech` | `/yl` |
| `/uphoster` | `/up` |
| `/clone` | `/cl` |
| `/status` | `/s` |
| `/userset` | `/us` |
| `/botset` | `/bs` |

---

## When something breaks

| It says... | Do this |
|---|---|
| Nothing at all | `docker compose logs app --tail 30` on your server |
| "not authorized" | Owner runs `/authorize` in that chat |
| "The Mirror command is currently disabled" | Owner turns it back on in `/botset` → Module Settings |
| "JDownloader is currently disabled" | Normal — JD is off by default. `/botset` → Module Settings |
| Stuck at 0% | Dead torrent, or no seeders. Try another one. |

[Full troubleshooting →](/troubleshooting)
