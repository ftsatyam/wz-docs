# Quick Start

Get the bot running and send your first file — in about 10 minutes.

---

## Step 1: Collect the 5 things you need

Open these in browser tabs and grab the info:

| What | Where to find it |
|---|---|
| **Bot Token** | [@BotFather](https://t.me/BotFather) → send `/newbot` → choose a name → copy the token |
| **API ID + Hash** | [my.telegram.org](https://my.telegram.org/apps) → log in → copy both numbers |
| **Your User ID** | [@userinfobot](https://t.me/userinfobot) → send `/start` → it shows a number |
| **MongoDB URL** | [MongoDB Atlas](https://www.mongodb.com/atlas) → free account → create cluster → click Connect → copy the connection string |
| **A server** | Any VPS with Docker (DigitalOcean $6/mo, Hetzner, Vultr) |

> **Don't have a server?** Get the cheapest VPS from any provider. A $6/month plan works fine.

---

## Step 2: Connect to your server

```bash
ssh root@your-server-ip
```

---

## Step 3: Install Docker

```bash
curl -fsSL https://get.docker.com | sh
```

---

## Step 4: Download and configure the bot

```bash
git clone -b wzv3 https://github.com/SilentDemonSD/WZML-X.git
cd WZML-X
cp config_sample.py config.py
nano config.py
```

Find these 5 lines and fill them in:

```python
BOT_TOKEN = "1234567890:ABCdefGHIjklmNOPqrstUVwxyz-1234567"   # from BotFather
OWNER_ID = 123456789                                            # from userinfobot
TELEGRAM_API = 12345                                            # from my.telegram.org
TELEGRAM_HASH = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p"            # from my.telegram.org
DATABASE_URL = "mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net"  # from MongoDB Atlas
```

Save: `Ctrl+S` (or `Ctrl+O` then `Enter`). Exit: `Ctrl+X`.

---

## Step 5: Start the bot

```bash
docker compose up -d
```

Wait 30 seconds. Check it's running:

```bash
docker compose ps
```

Both `app` and `tunnel` should show `Up`. To see the startup logs:

```bash
docker compose logs app --tail 10
```

---

## Step 6: Open Telegram and talk to your bot

Search for the username you chose on @BotFather. Send:

```
/start
```

You should see a welcome message. If you get "not authorized", send `/login` followed by the `LOGIN_PASS` if you set one.

---

## Step 7: Your first file

No setup needed. Copy-paste this exact command:

```
/leech https://speed.hetzner.de/100MB.bin
```

Wait 10-30 seconds...

The bot will send you a file called `100MB.bin`. Tap it to download.

**You just sent your first file through the bot!**

---

## What happened?

1. The bot downloaded the file from the internet
2. It split the file into pieces small enough for Telegram
3. It sent you the pieces as downloadable files

The bot is working.

---

## What next?

| You want to... | Go here |
|---|---|
| Save files to Google Drive instead of Telegram | [Set up a cloud drive](/upload-destinations#google-drive) |
| Learn everything the bot can do | [How To section](/how-to/leech) |
| Understand every config setting | [Configuration](/configuration) |
| Deploy on Heroku instead of VPS | [Heroku guide](/deployment/heroku) |
