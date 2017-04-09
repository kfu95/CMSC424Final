import events_from_artist as efa
import json
import sys

#displayname of event
#id of event

artist_name = sys.argv[1]
start_date = sys.argv[2]
end_date = sys.argv[3]

artist_id = efa.get_artist_id(artist_name)

concert_dict = efa.get_events_for_artist(artist_id,start_date,end_date)

print(json.dumps(concert_dict))