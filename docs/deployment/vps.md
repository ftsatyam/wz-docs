# VPS / Dedicated Server

::: info Prerequisites
Make sure you have the [prerequisites](./) ready before starting (BotFather token, api_id, api_hash, user ID, MongoDB URL).
:::

### Step 1: Install Docker on your server

```bash
curl -fsSL https://get.docker.com | sh
```

Verify: `docker --version`

### Step 2: Clone and configure

```bash
git clone -b wzv3 https://github.com/SilentDemonSD/WZML-X.git
cd WZML-X
cp config_sample.py config.py
nano config.py
```

::: warning Don't skip the `cp`
Docker mounts `./config.py` into the container. If the file doesn't exist yet,
Docker silently creates a **directory** with that name and the bot crashes on
startup with a confusing import error. Always `cp config_sample.py config.py`
before your first `docker compose up`.
:::

Fill in at minimum these 5 values:

```python
BOT_TOKEN = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
OWNER_ID = 123456789
TELEGRAM_API = 12345
TELEGRAM_HASH = "abc123def456..."
DATABASE_URL = "mongodb+srv://admin:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
```

### Step 3: Start the bot

```bash
docker compose up -d --build
```

Wait 1-2 minutes. Check it's running:

```bash
docker compose ps          # both app and tunnel should show "Up"
docker compose logs app --tail 10
```

Get your web UI URL:

```bash
docker compose logs tunnel
```

Look for `https://abc123.trycloudflare.com` — that's your web UI.

### Step 4: Talk to your bot

Open Telegram, find your bot, send `/start`, then `/help`, then try a mirror.

### Updating

The compose file **builds** the image from source, so `docker compose pull` does
nothing. Pull the code, then rebuild:

```bash
cd WZML-X
git pull
docker compose up -d --build
```

Your `config.py`, `accounts/` and `downloads/` are mounted from the host, so they
survive the rebuild.

### Stopping

```bash
docker compose down
docker image prune -a    # optional: clean up old images
```

### (Optional) Run with VPN

1. Uncomment the `gluetun` section in `docker-compose.yml`
2. Fill in your VPN provider details
3. Uncomment `network_mode: "service:gluetun"` on the `app` service
4. Run `docker compose up -d --build`

### (Optional) Run multiple bots

1. Create `config2.py` with different credentials
2. Uncomment `app2` and `tunnel2` in `docker-compose.yml`
3. Run `docker compose up -d --build`
