# Process Files

Extract, compress, convert, edit metadata, or take screenshots — all before the final upload.

---

## Extract archives

Unpack compressed files after download:

```
/mirror link -e                  # extract without password
/mirror link -e mypassword       # extract with password
```

Supports: **zip, rar, 7z, tar, gz, bz2, xz**.

---

## Compress to zip

Pack files into a zip archive:

```
/mirror link -z                  # zip without password
/mirror link -z mypassword       # zip with password protection
```

---

## Extract then zip

Do both — extract first, then zip the result:

```
/mirror link -e -z
```

---

## Join split files

If you have split files (`.001`, `.002`, etc.), join them into one:

```
/mirror link -j -m "folder"
```

Only works before extract or zip, so pair it with `-m` (same directory).

---

## Split large files

Break a file into smaller pieces:

```
/mirror link -sp 500mb
/mirror link -sp 2gb
/mirror link -sp 4000000000      # in bytes
```

---

## FFmpeg processing

Run custom FFmpeg commands on media files:

```
/mirror link -ff ["-i mltb.mkv -c copy -c:s srt mltb.mkv"]
```

**The `mltb.*` placeholder** is how you refer to your file:

| Placeholder | Matches |
|---|---|
| `mltb.mkv` | Files with `.mkv` extension only |
| `mltb.video` | All video files |
| `mltb.audio` | All audio files |
| `mltb` | Any file (keeps original extension) |

Add `-del` at the end to delete the original file after processing.

### Preset commands

Set up presets in config.py:

```python
FFMPEG_CMDS = {
    "compress": ["-i mltb.video -c:v libx264 -crf 28 mltb"],
    "subtitle": ["-i mltb.mkv -c copy -c:s srt mltb.mkv"],
}
```

Then use them by name:

```
/mirror link -ff compress
```

---

## Convert audio

```
/mirror link -ca mp3             # convert all audio to mp3
/mirror link -ca mp3 + flac ogg  # convert only flac and ogg to mp3
```

---

## Convert video

```
/mirror link -cv mp4             # convert all video to mp4
/mirror link -cv mkv - webm flv  # convert to mkv, skip webm and flv
```

---

## Take screenshots

```
/mirror link -ss                 # default: 10 screenshots
/mirror link -ss 6               # take 6 screenshots
```

---

## Create a sample video

Make a short clip from a video:

```
/mirror link -sv                 # default: 60s with 4s parts
/mirror link -sv 30:5            # 30s sample with 5s parts
/mirror link -sv :5              # keep 60s, use 5s parts
```

---

## Add a thumbnail

```
/mirror link -t https://example.com/thumb.jpg
/mirror link -t none             # remove thumbnail
```

You can also use a Telegram message link that contains a photo.

### Thumbnail layout

Control the grid arrangement:

```
/mirror link -tl 3x3             # 3 columns, 3 rows
```

---

## Edit metadata

Add title, artist, album, year, etc. to media files:

```
/mirror link -meta title=My Movie|artist=Me|album=Great
```

### Dynamic variables

| Variable | Turns into |
|---|---|
| `{filename}` | Original filename (with extension) |
| `{basename}` | Filename without extension |
| `{extension}` | File extension (no dot) |
| `{year}` | Year extracted from filename |
| `{audiolang}` | Auto-detected audio language |
| `{sublang}` | Auto-detected subtitle language |

### Per-stream metadata

In `/userset` → FF Media Settings, you can set different metadata for audio, video, and subtitle streams separately.

---

## Name substitution

Replace text in filenames automatically:

```
/mirror link -ns oldname/newname
```

Format: `wordToReplace/replacement/s` (add `/s` at the end for case-sensitive).

```
/mirror link -ns [1080p]/1080/s | [720p]/720
```

Multiple substitutions separated by `|`.
