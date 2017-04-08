import json,requests

def getArtistSpotifyId(artist_name,auth):
    url = 'https://api.spotify.com/v1/search?'
    
    #query parameters
    params = dict(
        q = artist_name,
        type='artist',
        limit='1'
    )
    
    headers = {"Authorization":"Bearer " + auth }
    
    #calling API
    resp = requests.get(url=url, params=params, headers=headers)
    data = json.loads(resp.text)
    
    #getting the artist's id from search
    if len(data['artists']['items']) >= 1:
        return data['artists']['items'][0]['id']
    return None
    
def getSongUris(song_obj):
    return song_obj['uri']
    
def getSongUrisFromArtist(artist_id,auth):
    url = 'https://api.spotify.com/v1/artists/' + artist_id + '/top-tracks?'
    #query parameters
    params = dict(
        country = 'US'
    )
    
    headers = {"Authorization":"Bearer " + auth}
    
    #calling API
    resp = requests.get(url=url, params=params, headers=headers)
    data = json.loads(resp.text)
    
    song_uris = map(getSongUris,data['tracks'][:5])
    return song_uris
    
def makePlaylistFromSongs(username,song_uris,auth):
    url = 'https://api.spotify.com/v1/users/' + username + '/playlists'
    
    headers = {"Authorization":"Bearer " + auth}
    
    payload = {
        'description': 'Taste Test Created By TuneTown', 
        'public': 'false',
        'name': 'Taste Test'
    }
    
    resp = requests.post(url=url, data=json.dumps(payload), headers=headers)
    data = json.loads(resp.text)

    playlist_id = data['id']
    
    for song_uri in song_uris:
        url = 'https://api.spotify.com/v1/users/' + username + '/playlists/' + playlist_id + '/tracks?'
        #query parameters
        params = dict(
            position = '0',
            uris = song_uri
        )
        
        headers = {"Authorization":"Bearer " + auth}
        
        resp = requests.post(url=url, params=params, headers=headers)