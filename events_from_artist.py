import json,requests

#getting the artist's songkick ID
url = 'http://api.songkick.com/api/3.0/search/artists.json?'
#query parameters
params = dict(
        query = 'Migos',
	    apikey='s9TgD3sUNEyDRjbc'
)
#calling API
resp = requests.get(url=url, params=params)
data = json.loads(resp.text)

#getting the artist's id from the returned JSON object
artist_id = data['resultsPage']['results']['artist'][0]['id']




event_dict = {}

print(data)
exit()
    

#get event name, location, venue name