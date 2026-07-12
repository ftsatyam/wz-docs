# Telemetry / Crash Reporting

The bot can send crash reports to help developers identify and fix bugs.

## How it works

When the bot encounters an unhandled exception, it sends the error trace to a remote worker. This includes:

- The error message and stack trace
- Which command or module caused the error
- Bot version

No personal data, user messages, or file contents are sent.

## Disabling telemetry

```python
ENABLE_TELEMETRY = False   # in config.py
```

When disabled, crashes are silent — no data is sent anywhere.

## Why keep it on?

Crash reports help the developer fix issues quickly. If you encounter a bug and telemetry is off, you'll need to manually share the bot logs with support via `/log`.
