import json, requests

def getEventsFromArtist(api_key,artist):
	url = 'http://api.songkick.com/api/3.0/search/artists.json?'

	params = dict(
	    query='Eminem', # Query
	    apikey='s9TgD3sUNEyDRjbc',
	)

	resp = requests.get(url=url, params=params)
	data = json.loads(resp.text)

	

	