import json, requests

# Get venue list

def stripData(objs):
    return (objs['displayName'],objs['id'],objs['metroArea']['id'])
    
def getVenues(query):
    url = 'http://api.songkick.com/api/3.0/search/venues.json?'
    
    params = dict(
        query=query, # Query
        apikey='s9TgD3sUNEyDRjbc',
    )
    
    resp = requests.get(url=url, params=params)
    data = json.loads(resp.text)
    
    venue_list = map(stripData,data['resultsPage']['results']['venue'])
    return venue_list

# We have the venue list, show it to user through frontend and have them
# choose the correct venue
# For the purpose of prototyping, assume they chose the first result

venue = getVenues('930+Club')[0]

# Now, get the events at this venue

def getConcertsAtVenue(venue_id, events):
    result = []
    for event in events:
        if ((event['type'] == "Concert")):
            result.append((event['displayName'],event['id'],event['performance']))
    return result
    
def getEvents(venue):
    url = 'http://api.songkick.com/api/3.0/venues/' + str(venue[1]) + '/calendar.json?'
    
    page = 1
    
    params = dict(
        apikey='s9TgD3sUNEyDRjbc',
        page=str(page)
    )
    
    resp = requests.get(url=url, params=params)
    data = json.loads(resp.text)
    
    events = getConcertsAtVenue(venue[1],data['resultsPage']['results']['event'])
    
    while (page * 50 < data['resultsPage']['totalEntries']):
        page = page + 1
        params = dict(
            location='sk:' + str(venue[2]), # Query
            apikey='s9TgD3sUNEyDRjbc',
            page=str(page)
        )
        resp = requests.get(url=url, params=params)
        data = json.loads(resp.text)
        
        events.extend(getConcertsAtVenue(venue[1],data['resultsPage']['results']['event']))
    return events
    
# events is now the events at this venue
# show the events at this venue
# for purposes of this prototype, assume the user wants all events at the venue

concerts = getEvents(venue)

# now find the artists playing at these events

def getArtists(concerts):
    artists = []
    
    def getArtists(obj):
        return obj['artist']['displayName']
    
    for concert in concerts:
        artists.extend(map(getArtists,concert[2]))
        
    return artists
    
    
artists = getArtists(concerts)