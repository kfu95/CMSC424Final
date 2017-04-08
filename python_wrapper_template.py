import json, requests

url = 'http://api.songkick.com/api/3.0/search/venues.json?'

params = dict(
    search_query='930+Club', # Query
    apikey='s9TgD3sUNEyDRjbc',
)

resp = requests.get(url=url, params=params)
data = json.loads(resp.text)