import python_wrapper_template as ayman
import spotify_playlist_creation as sp
import events_from_artist as vik
import sys, json
from dateutil.parser import parse
from StringIO import StringIO

io = StringIO()


events = sys.argv[1].split(',')

artists = getArtistsFromEventIds(events)

json.dump(artists, io)

print(io.getvalue())