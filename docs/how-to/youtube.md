# Download from YouTube & Social Media

Download videos and audio from YouTube, Twitter, Instagram, TikTok, and thousands of other sites.

## The basic command

```
/ytdl https://youtube.com/watch?v=dQw4w9WgXcQ
```

The bot downloads the video and uploads it to your default destination.

To send it straight to Telegram instead of cloud:

```
/ytdlleech https://youtube.com/watch?v=dQw4w9WgXcQ
```

---

## Choose video quality

Add `-s` to pick which format to download:

```
/ytdl https://youtube.com/watch?v=... -s
```

The bot will show you buttons to choose quality (1080p, 720p, audio only, etc.).

---

## Custom yt-dlp options

Pass extra options to yt-dlp in JSON format:

```
/ytdl link -opt {"format":"best"}
/ytdl link -opt {"format":"bv*+mergeall[vcodec=none]"}
```

This is for advanced users. See the [yt-dlp documentation](https://github.com/yt-dlp/yt-dlp#usage) for available options.

---

## Download playlists

By default, the bot downloads the best format from a playlist. To limit how many items:

```
/ytdl https://youtube.com/playlist?list=... -sp 500mb
```

Set `PLAYLIST_LIMIT` in config to cap the number of items.

---

## What sites are supported?

yt-dlp supports **1000+ sites** including:

| Site | Works? | Notes |
|---|---|---|
| YouTube | Yes | Videos, shorts, playlists |
| Twitter / X | Yes | Videos in tweets |
| Instagram | Yes | Requires `INSTADL_API` config |
| TikTok | Yes | |
| Facebook | Yes | |
| Twitch | Yes | Clips, VODs |
| Vimeo | Yes | |
| m3u8 streams | Yes | HLS live streams |
| Bilibili | Yes | |
| Reddit | Yes | |

---

## Cookies (for restricted content)

Some sites require you to be logged in. Upload a `cookies.txt` file via `/userset` → Mics Settings → YT Cookie File.

This lets the bot access age-restricted or login-only content.
