# Send a File to Telegram

You want a file from the internet to show up in your Telegram chat. This is called **leeching**.

## The basic command

```
/leech https://example.com/file.zip
```

The bot downloads the file and sends it right here in this chat.

---

## Other sources, same idea

| If you have this... | Use this | Alias | Example |
|---|---|---|---|
| A direct download link | `/leech` | `/l` | `/leech https://example.com/file.zip` |
| A YouTube video | `/ytdlleech` | `/yl` | `/ytdlleech https://youtube.com/watch?v=...` |
| A torrent magnet | `/qbleech` | `/ql` | `/qbleech magnet:?xt=urn:btih:...` |

---

## Document vs Media

By default, videos play inline and images show a preview. To change this:

```
/leech link -doc      # force as a raw file (no preview)
/leech link -med      # force as media (with preview)
```

---

## Big files: splitting

Telegram lets you send files up to **2GB** (4GB with Telegram Premium). If your file is bigger, the bot splits it automatically.

To control the split size:

```
/leech link -sp 500mb
/leech link -sp 2gb
```

---

## Who sends the file?

Three options. By default the bot picks the fastest.

| Mode | What happens | Flag |
|---|---|---|
| **Bot** | The bot account sends the file. Works for most cases. | `-bt` |
| **User** | Your personal Telegram account sends the file. Needed for private channel downloads. | `-ut` |
| **Hybrid** | Bot sends small files, your account sends large files. Fastest option. | `-hl` |

```
/leech link -bt    # force bot
/leech link -ut    # force user
/leech link -hl    # hybrid mode
```

---

## Choose where the file goes

By default the file arrives in the chat where you typed the command. To send it elsewhere:

```
/leech link -up pm                # send to your private messages
/leech link -up @channelname      # send to a channel
/leech link -up 123456789         # send to a specific chat ID
/leech link -up 123456789|1234    # send to a specific topic in a forum
```

---

## More options

| You want to... | Add this |
|---|---|
| Rename the file | `-n myfile.mp4` |
| Add a thumbnail | `-t https://example.com/thumb.jpg` |
| Extract a zip/rar | `-e` or `-e password` |
| Compress to zip | `-z` or `-z password` |
| Convert to mp3 | `-ca mp3` |
| Convert to mp4 | `-cv mp4` |
| Take screenshots | `-ss 6` |
| Add metadata | `-meta title=MyMovie\|artist=Me` |

Each of these is explained in [Process Files](/how-to/process).
