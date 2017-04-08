import json,requests

#getting the artist's songkick ID
def get_artist_id(artistName):
    url = 'http://api.songkick.com/api/3.0/search/artists.json?'
    #query parameters
    params = dict(
            query = artistName,
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
    url = 'http://api.songkick.com/api/3.0/artists/' + str(artistid) + '/calendar.json?apikey=s9TgD3sUNEyDRjbc'

    resp = requests.get(url=url)
    data = json.loads(resp.text)
    
    #list to store events (dicts/hashes)
    events_arr = []
    
    for event in data['resultsPage']['results']['event']:
        #if a concert, store the event's data in a dict
        if event['type'] == "Concert": 
            displayName = event['displayName']
            location = event['location']['city']
            venue = event['venue']['displayName']
            date = event['start']['date']
            start_time = event['start']['time']
            event_dict = {
                'Loc' : location,
                'Venue': venue,
                'Event Name': displayName,
                'Date': date,
                'Start Time': start_time
            }
            #append the event dict to the array of events
            events_arr.append(event_dict)
            
    return events_arr
    