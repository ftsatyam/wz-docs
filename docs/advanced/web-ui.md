# Web File Selection UI

The web UI lets you browse torrent contents and pick which files to download — all from your browser.

## How to access it

Add `-s` to any mirror command:

```
/qbmirror magnet:?xt=urn:btih:xxxx -s
```

The bot replies with a link. Click it to open the file browser.

## Finding your web UI URL

```bash
docker compose logs tunnel
```

Look for `https://abc123.trycloudflare.com`. That's your URL.

## PIN code protection

By default, the web UI asks for a PIN before letting you in. This prevents others from accessing it.

To disable (not recommended):

```python
WEB_PINCODE = False
```

## Configuration

| Variable | What it does | Default |
|---|---|---|
| `BASE_URL` | Your public web UI URL | `""` (auto from tunnel) |
| `WEB_PINCODE` | Require PIN for access | `True` |
| `WEB_ACCESS_PASSWORD` | Secret for deriving proxy passwords | `""` (auto-generated) |

## Proxy endpoints

The web UI also proxies to the qBittorrent web interface:

| Endpoint | What it gives access to |
|---|---|
| `/qbit/` | qBittorrent web UI |

Passwords are derived from `WEB_ACCESS_PASSWORD` and shown in the startup logs.
