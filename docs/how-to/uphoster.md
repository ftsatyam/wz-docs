# Upload to File Hosting Sites

Upload a file to a direct download (DDL) hosting site so other people can download it via a link. This is called **uphostering**.

## The basic command

Reply to a file with:

```
/uphoster
```

The bot uploads the file to its configured DDL servers and gives you back download links.

---

## Supported DDL servers

| Server | Config needed | User setting available? |
|---|---|---|
| **Gofile.io** | `GOFILE_API`, `GOFILE_FOLDER_ID` | Yes — via `/userset` |
| **BuzzHeavier** | `BUZZHEAVIER_API` | Yes — via `/userset` |
| **PixelDrain** | `PIXELDRAIN_KEY` | Yes — via `/userset` |
| **DevUploads** | `DEVUPLOADS_KEY`, `DEVUPLOADS_FOLDER` | Yes — via `/userset` |
| **VikingFile** | `VIKINGFILE_HASH`, `VIKINGFILE_FOLDER` | Yes — via `/userset` |
| **ProtectedFiles** | `PROTECTED_API` | No (global config only) |
| **FileLion** | `FILELION_API` | No (global config only) |
| **StreamWish** | `STREAMWISH_API` | No (global config only) |
| **Streamtape** | (built-in — no API key needed) | No |

---

## Your own API keys

Set your personal API keys via `/userset` → **Uphoster Settings** so they override the bot owner's defaults.

---

## Gofile auto-create folder

If you want Gofile to automatically create a new folder for each upload:

```python
GOFILE_AUTO_CREATE_FOLDER = True   # in config.py
```
