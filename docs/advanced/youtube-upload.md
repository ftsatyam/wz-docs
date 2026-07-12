# YouTube Upload (Beta)

Upload videos directly to your YouTube channel from the bot.

## Setup

Configure YouTube upload settings in config.py:

```python
YT_DESP = "Uploaded with WZML-X bot"       # Video description
YT_TAGS = ["telegram", "bot", "youtube"]    # Search tags
YT_CATEGORY_ID = 22                         # "People & Blogs"
YT_PRIVACY_STATUS = "unlisted"              # public, unlisted, or private
```

## Usage

Use the same mirror/leech commands — videos are uploaded to YouTube as part of the normal workflow. Configure your YouTube account connection via `/botset` → Private Files.

## User-specific settings

Users can set their own YouTube preferences via `/userset` → **Mirror Settings** → **YT Up Tools**:

- Custom description
- Tags
- Category ID
- Privacy status

## Notes

- Only works if the bot owner has YouTube OAuth configured
- Supports: mp4, mkv, avi, mov, and other common video formats
- Playlist support is available
