import json,requests
from datetime import datetime as dt

#getting the artist's songkick ID:

#given an artist's name as a string,
#search for the artist's ID and return it
def get_artist_id(artistName):
    #base URL
    url = 'http://api.songkick.com/api/3.0/search/artists.json?'
    
    #query parameters
    params = dict(
            query = artistName,
    	    apikey='s9TgD3sUNEyDRjbc'
    )
    
    #calling the SongKick API
    resp = requests.get(url=url, params=params)
    data = json.loads(resp.text)
    
    #getting the artist's id from the returned JSON object
    artist_id = data['resultsPage']['results']['artist'][0]['id']
    return artist_id


#getting an artist's event calendar: 

# given an artist's songkick ID, 
# make a dict/hash of data for each event 
# that the artist is playing at,
# and return a list of those dicts/hashes. 
def get_events_for_artist(artistid,start_date = 'empty',end_date = 'empty'):
    #base URL
    url = 'http://api.songkick.com/api/3.0/artists/' + str(artistid) + '/calendar.json?apikey=s9TgD3sUNEyDRjbc'
    #Calling SongKick API
    resp = requests.get(url=url)
    data = json.loads(resp.text)
    
    #list to store events 
    events_arr = []
    
    start_datetime = 'empty'
    end_datetime = 'empty'
    
    if start_date != 'empty' and end_date != 'empty':
        #converting to datetime objects in format "YYYY-MM-DD"
        start_datetime = dt.strptime(start_date, '%Y-%m-%d')
        end_datetime = dt.strptime(end_date,'%Y-%m-%d') 
    
    #looping through the events the artist is playing at
    for event in data['resultsPage']['results']['event']:
        #if event is a concert, store the event's data in a dict
        if event['type'] == "Concert": 
            date = event['start']['time']
            displayName = event['displayName']
            location = event['location']['city']
            venue = event['venue']['displayName']
            date = event['start']['date']
            event_datetime = dt.strptime(date,'%Y-%m-%d')
            start_time = event['start']['time']
            
            artist = event['performance'][0]['artist']['displayName']
            
            event_dict = {
                'Loc' : location,
                'Venue': venue,
                'Event Name': displayName,
                'Date': date,
                'Start Time': start_time,
                'Artist': artist
            }
            #append the event dict to the array of events
            if start_datetime != 'empty' and end_datetime != 'empty':
                if event_datetime >= start_datetime and event_datetime <= end_datetime:
                    events_arr.append(event_dict)
            else: #if empty, add all
                print('entered else')
                print('\n')
                events_arr.append(event_dict) 
            
    return events_arr
    

def is_between_dates(eventdate,startdate,enddate):
    return eventdate >= stardate and eventdate <= enddate

def get_events_for_artist_with_dates(artistid,start_date,end_date):
    #base URL
    url = 'http://api.songkick.com/api/3.0/artists/' + str(artistid) + '/calendar.json?apikey=s9TgD3sUNEyDRjbc'
    
    #converting to datetime objects in format "YYYY-MM-DD"
    start_datetime = dt.strptime(start_date, '%Y-%m-%d')
    end_datetime = dt.strptime(end_date,'%Y-%m-%d')
    
    #Calling SongKick API
    resp = requests.get(url=url)
    data = json.loads(resp.text)
    
    #list to store events 
    events_arr = []
    
    #looping through the events the artist is playing at
    for event in data['resultsPage']['results']['event']:
        #if event is a concert, store the event's data in a dict
        if event['type'] == "Concert": 
            event_datetime = dt.strptime(event['start']['date'], '%Y-%m-%d')
            if event_datime > start_datetime and event_datetime < end_datetime:
                displayName = event['displayName']
                location = event['location']['city']
                venue = event['venue']['displayName']
                date = event['start']['date']
                start_time = event['start']['time']
                artist = event['performance']['artist']['displayName']

                event_dict = {
                    'Loc' : location,
                    'Venue': venue,
                    'Event Name': displayName,
                    'Date': date,
                    'Start Time': start_time,
                    'Artist': artist
                }
                #append the event dict to the array of events
                events_arr.append(event_dict)
                
    return events_arr
            