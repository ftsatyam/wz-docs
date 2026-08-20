# Plugin System

Plugins extend the bot's functionality at runtime — no restart needed.

## Bundled plugin: Speedtest

```
/speedtest
```

Tests your server's internet download and upload speed. Uses `speedtest-cli`.

> `/speedtest` only exists while the plugin is loaded and enabled. If the command
> does nothing, open `/plugins` and enable it.

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
from bot.core.plugin_manager import PluginBase, PluginInfo


class MyPlugin(PluginBase):
    PLUGIN_INFO = PluginInfo(
        name="my_plugin",
        version="1.0.0",
        author="Your Name",
        description="Does something useful",
        enabled=True,
        handlers=[],
        commands=["mycommand"],   # registers /mycommand
        dependencies=[],
    )

    async def on_load(self) -> bool:
        return True

    async def on_unload(self) -> bool:
        return True

    async def on_enable(self) -> bool:
        return True

    async def on_disable(self) -> bool:
        return True
```

Place it in `plugins/my_plugin.py` and load it via `/plugins`. Any name listed in
`commands` is added to the bot's command list automatically.

`plugins/speedtest_plugin.py` in the repo is a complete working example — copy it
as your starting point.
