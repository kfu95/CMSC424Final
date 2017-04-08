import json, requests

def stripData(objs):
    return (objs['displayName'],objs['id'])

url = 'http://api.songkick.com/api/3.0/search/venues.json?'

params = dict(
    query='930+Club', # Query
    apikey='s9TgD3sUNEyDRjbc',
)

resp = requests.get(url=url, params=params)
data = json.loads(resp.text)

venue_list = map(stripData,data['resultsPage']['results']['venue'])