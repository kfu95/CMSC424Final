import python_wrapper_template as ayman
import spotify_playlist_creation as sp
import events_from_artist as vik
import sys, json
from dateutil.parser import parse
from StringIO import StringIO

io = StringIO()


artist_ids = sys.argv[1].split(',')
song_uris = []

# FIX AUTHORIZATION
for artist in artist_ids:
    uris = sp.getSongUrisFromArtist(artist,"BQDBVi-2Y7N0UiSvQkepaiamrq5D2AUYEibHUyRQVukHxKGjQrM7AuwgflgQl6qY6zW-XG8sVGTaMa0B51iYxYboKAPJL7vYd7ZJ-eT81QZ9cIdqlXAlAhnvEuChAe-wVxXGnrFspdsyltVrpTkZOsJvRyw96Pp5r33iVAC8hQBTI2Nne1tmMqw1qxZjn5x0RQuuQ213TjGK19sfWV9kvUS8X9iL3J7NJdjCtxIiTbWwOLykbKiGmrxm9TNT")
    song_uris.extend(uris)
    
url = sp.makePlaylistFromSongs("karimcheese",song_uris,"BQDBVi-2Y7N0UiSvQkepaiamrq5D2AUYEibHUyRQVukHxKGjQrM7AuwgflgQl6qY6zW-XG8sVGTaMa0B51iYxYboKAPJL7vYd7ZJ-eT81QZ9cIdqlXAlAhnvEuChAe-wVxXGnrFspdsyltVrpTkZOsJvRyw96Pp5r33iVAC8hQBTI2Nne1tmMqw1qxZjn5x0RQuuQ213TjGK19sfWV9kvUS8X9iL3J7NJdjCtxIiTbWwOLykbKiGmrxm9TNT")

print(url)
sys.stdout.flush()