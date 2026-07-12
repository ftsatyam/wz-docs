# Search for Content

Find torrents, files in your Google Drive, or look up movies and shows — all from inside Telegram.

---

## Torrent search

```
/search ubuntu 24.04
```

Searches multiple torrent sites at once. Results show name, size, seeders, and leechers.

**Setup:** Configure `SEARCH_API_LINK` or `SEARCH_PLUGINS` in config for more sources. 17 default plugins are included.

---

## Google Drive search

```
/list mydocument.pdf
```

Finds files and folders in your configured Google Drive(s). Shows direct links to matching items.

---

## Look up a movie or show

```
/imdb The Matrix              # search by title
/imdb tt0133093               # search by IMDB ID
```

Shows rating, plot, cast, year, runtime, genre, and poster.

---

## Anime search

```
/anilist Attack on Titan      # search by name
/anilist 20755                # search by AniList ID
```

Shows rating, description, episodes, genres, and poster.

---

## Drama search

```
/mdl Crash Landing on You
```

Searches Korean, Chinese, Japanese, and other Asian dramas on MyDramaList.

---

## NZB / Usenet search

```
/nzbsearch linux iso          # or /ns linux iso
```

Searches Usenet via NZBHydra. Requires `HYDRA_IP` and `HYDRA_API_KEY` configured.
