# Manage Your Downloads

Keep track of what the bot is doing and control active tasks.

---

## Check what's running

```
/status       # or /s
```

Shows all tasks — what's downloading, uploading, or waiting.

```
/status me
```

Shows only your tasks.

```
/statusall
```

Shows tasks across all bot instances (if you run multiple).

---

## Bot statistics

```
/stats        # or /st
```

Shows CPU, RAM, disk space, uptime, total downloads, and more.

---

## Cancel a task

```
/cancel gid123abc               # or /c gid123abc
/cancel                          # or reply to a task message
```

Cancel everything at once:

```
/cancelall all                   # or /call all
/cancelall mirror                # cancel only mirror tasks
/cancelall leech                 # cancel only leech tasks
/cancelall upload                # cancel only upload tasks
```

---

## Force start a queued task

If the queue is full and a task is waiting, skip the queue:

```
/forcestart gid123abc            # or /fs gid123abc
/forcestart                      # or reply to a queued task
```

---

## Select files from a torrent

Open the file selection menu for a torrent, NZB, or JDownloader task:

```
/select gid123abc                # or /sel gid123abc
/select                          # or reply to the task message
```

---

## Get file info

```
/mediainfo                       # or /mi — reply to a video/audio file
/mediainfo https://example.com/video.mp4
```

Shows codec, resolution, bitrate, duration, and more.

---

## Clean Google Drive

```
/gdclean                         # or /gdc
```

Opens a menu to clean/organize files in your Google Drive.
