# Plugin System

Plugins extend the bot's functionality at runtime — no restart needed.

## Bundled plugin: Speedtest

```
/speedtest
```

Tests your server's internet download and upload speed. Uses `speedtest-cli`.

## Managing plugins

```
/plugins
```

Opens the plugin manager menu where you can:

- **List** all loaded plugins
- **Load** a new plugin from the `plugins/` folder
- **Unload** a running plugin
- **Enable/Disable** individual plugins
- **View info** about each plugin (name, version, author, description)

## Adding a plugin

1. Place a `.py` file in the `plugins/` folder on your server
2. Send `/plugins` to the bot
3. Click **Load** and select your plugin

## Writing a custom plugin

A basic plugin structure:

```python
from bot.core.plugin_manager import BasePlugin

class MyPlugin(BasePlugin):
    name = "MyPlugin"
    version = "1.0"
    author = "Your Name"
    description = "Does something useful"

    async def on_message(self, message):
        # Handle incoming messages
        pass
```

Place it in `plugins/my_plugin.py` and load it via `/plugins`.
