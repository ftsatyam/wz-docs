
# What is HKML-X?

Think of HKML-X as your **personal file-butler bot on Telegram**. You send it a link, and it grabs the file and puts it wherever you want — Google Drive, your cloud storage, or right back to you on Telegram.

## What can it do?

| You give it... | It gives you back... |
|---|---|
| A torrent magnet | The downloaded file/folder |
| A YouTube link | The video or audio |
| A direct download link | The file |
| A Mega.nz link | The file |
| A Telegram message link | The file |
| A Google Drive link | A copy of the file |

## How does it work?

```
You → Send link to bot → Bot downloads it → Bot uploads to destination → Done!
```

The bot runs on a **server** (VPS) using **Docker**. You talk to it through **Telegram commands**. It's always online, 24/7.

## What you need to get started

Before you begin, get these ready:

| Requirement | What it is | Where to get it |
|---|---|---|
| **A server (VPS)** | A computer that runs 24/7 | Any VPS provider (DigitalOcean, Hetzner, etc.) |
| **Docker installed** | The app that runs the bot | Docker's website |
| **Bot Token** | Your bot's ID card | [@BotFather](https://t.me/BotFather) on Telegram |
| **Telegram API credentials** | App ID and Hash | [my.telegram.org](https://my.telegram.org/apps) |
| **MongoDB URL** | A database to store settings | [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier works) |
| **Your Telegram User ID** | To identify you as the owner | [@userinfobot](https://t.me/userinfobot) |

> **Don't have a server?** A cheap VPS ($5-6/month) works fine. DigitalOcean, Hetzner, and Vultr all have good options.

## What would you like to do?

| If you want to... | Go here |
|---|---|
| Get the bot running in 10 minutes | [Quick Start](/quick-start) |
| Just see the commands | [Cheat Sheet](/cheatsheet) |
| Know what "leech" and "mirror" mean | [Word List](/glossary) |
| Deploy on a VPS with Docker | [Deployment Guide](/deployment/) |
| Deploy on Heroku | [Heroku Guide](/deployment/heroku) |
| Learn every setting | [Configuration](/configuration) |
| See all the things the bot can do | [How To section](/how-to/leech) |
