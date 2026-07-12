# Multiple Bots & Scaling

Run multiple bot instances for higher throughput or separate use cases.

## Helper tokens (parallel tasks)

Add extra bot tokens to handle tasks in parallel. Each helper bot works independently.

```python
HELPER_TOKENS = "123456:TOKEN1 789012:TOKEN2"
```

Space-separated list of bot tokens from @BotFather.

## Command suffix (multi-instance)

When running two bots in the same group, both would respond to `/mirror`. Use `CMD_SUFFIX` to differentiate:

```python
CMD_SUFFIX = "x"     # Bot 1: /mirrorx, Bot 2: /mirror
```

Users type `/mirrorx` to reach Bot 1 and `/mirror` for Bot 2.

## Multi-instance Docker setup

1. Create separate `config.py` files for each bot
2. Uncomment `app2` and `tunnel2` in `docker-compose.yml`
3. Update volume mounts to point to separate config files
4. Run `docker compose up -d`

## Cross-instance commands

| Command | What it does |
|---|---|
| `/restartall` | Restarts all bot instances |
| `/statusall` | Shows tasks across all instances |

## Database

Each bot partitions its data in MongoDB automatically (keyed by bot token hash). No extra setup needed.
