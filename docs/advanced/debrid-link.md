# Debrid-Link Integration

[Debrid-Link](https://debrid-link.com) is a premium link generator that gives you high-speed access to file hosters like Rapidgator, Uploaded, and many others.

## Setup

```python
DEBRID_LINK_API = "your-api-key"   # in config.py
```

Get your API key from your Debrid-Link account dashboard.

## How it works

When you send a link from a supported hoster, the bot routes it through Debrid-Link's API, which:

1. Checks if the file is cached on their servers
2. If cached, provides an instant high-speed download
3. If not, downloads it through their premium accounts

This bypasses slow download speeds and waiting times on free file hosters.
