import json, requests

url = 'http://api.songkick.com/api/3.0/venues/'

params = dict(
    origin='Chicago,IL',
    destination='Los+Angeles,CA',
    waypoints='Joplin,MO|Oklahoma+City,OK',
    sensor='false'
)

resp = requests.get(url=url, params=params)
data = json.loads(resp.text)