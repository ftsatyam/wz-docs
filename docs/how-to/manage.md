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

Send `/status`. Every running task has a tap-to-cancel link under it that looks
like `/c_gid123abc`. Tap it — that's the only way to cancel one task.

```
/c_gid123abc
```

> Plain `/cancel` on its own does nothing. The bot only listens for the
> `/c_<gid>` form, which is why `/status` prints it for you.

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

This works on tasks that are **queued**, not ones already downloading.

---

## Select files from a torrent

Open the file selection menu for a torrent, NZB, or JDownloader task:

```
/sel_gid123abc
```

Like cancelling, `/status` prints this link for you — tap it. Plain `/select`
does nothing on its own.

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
