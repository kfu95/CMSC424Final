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
    uris = sp.getSongUrisFromArtist(artist,"BQC57wie09ggBWVWUNGPOF7N2o_lbTwYlAXs8QjNB3GuN7ZawlrnI4U3oMfHhSd_9Zz1sNqzl2Q-a3-Xh6tEWKzbvTDCOarlwpNLuHfXdSKF8Fa0BcW5cyxWuCGWAeGXy8KlEbjLgzpZDii4RqrsgZxLzw-YYfcLn6h1dAHXQdYjXhhsvEK-ooAga5N8x9Jt0OPGGoyUilY3j33MW1MPGmrMo5EG__U1zIJg1Ut7xJ3JXRoyV1jh_Ki530wH")
    song_uris.extend(uris)
    
url = sp.makePlaylistFromSongs("karimcheese",song_uris,"BQC57wie09ggBWVWUNGPOF7N2o_lbTwYlAXs8QjNB3GuN7ZawlrnI4U3oMfHhSd_9Zz1sNqzl2Q-a3-Xh6tEWKzbvTDCOarlwpNLuHfXdSKF8Fa0BcW5cyxWuCGWAeGXy8KlEbjLgzpZDii4RqrsgZxLzw-YYfcLn6h1dAHXQdYjXhhsvEK-ooAga5N8x9Jt0OPGGoyUilY3j33MW1MPGmrMo5EG__U1zIJg1Ut7xJ3JXRoyV1jh_Ki530wH")

print(url)
sys.stdout.flush()