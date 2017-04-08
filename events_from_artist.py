import json,requests

#getting the artist's songkick ID
def get_artist_id(artistName):
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
    return artist_id
    



def get_events_for_artist(artistid):
    #Getting the artist's event calendar
    url = 'http://api.songkick.com/api/3.0/artists/' + str(artist_id) + '/calendar.json?apikey=s9TgD3sUNEyDRjbc'

    resp = requests.get(url=url)
    data = json.loads(resp.text)
    
    

#get event name, location, venue name