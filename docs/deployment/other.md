# Other Deployment Options

## CapRover

WZML-X includes a `captain-definition` file for one-click deployment on CapRover.

1. Install CapRover on your server
2. Create a new app in the CapRover dashboard
3. Deploy using the GitHub repository or CLI
4. Set environment variables in the CapRover dashboard

---

## Single Container (without Docker Compose)

If you prefer to run the bot without Docker Compose:

```bash
docker build -t wzmlx .
docker run -p 8080:8080 wzmlx
```

Note: The tunnel and some services won't auto-start. You'll need to handle networking yourself.

---

## Multi-Instance (Multiple Bots)

Run multiple bot instances on the same server. Each needs its own config and data.

1. Create separate `config.py` files for each bot (e.g., `config2.py`, `config3.py`)
2. Uncomment `app2` and `tunnel2` in `docker-compose.yml`
3. Update volume mounts in the compose file to point to separate config files
4. Run `docker compose up -d`

Each bot needs its own `BOT_TOKEN`, and you should set `CMD_SUFFIX` to differentiate commands (e.g., `"2"` so one bot uses `/mirror` and the other uses `/mirror2`).
