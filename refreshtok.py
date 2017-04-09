import sys,requests,os

# https://developer.spotify.com/web-api/authorization-guide/#authorization-code-flow
# BQDBVi-2Y7N0UiSvQkepaiamrq5D2AUYEibHUyRQVukHxKGjQrM7AuwgflgQl6qY6zW-XG8sVGTaMa0B51iYxYboKAPJL7vYd7ZJ-eT81QZ9cIdqlXAlAhnvEuChAe-wVxXGnrFspdsyltVrpTkZOsJvRyw96Pp5r33iVAC8hQBTI2Nne1tmMqw1qxZjn5x0RQuuQ213TjGK19sfWV9kvUS8X9iL3J7NJdjCtxIiTbWwOLykbKiGmrxm9TNT


os.environ["REFRESHTOKEN"] = 'SpotifyEmpty'


get_url = 'https://accounts.spotify.com/authorize'
params = {
	clientid = '5182a98e4c0742f78fe0f764ebeaab97',
	response_type = 'code',
	redirect_uri = 'https://survey.surf',
	show_dialog = 'false'
}

resp = requests.get(url = get_url,params = params)

post_url = 'https://accounts.spotify.com/api/token'

if os.environ["REFRESHTOKEN"] == 'SpotifyEmpty':
	auth = 'Basic 5182a98e4c0742f78fe0f764ebeaab97:dcc81899e59c4a2daa0cf92affc64760'
else:
	auth = os.environ["REFRESHTOKEN"]


params = {
	grant_type = 'authorization_code',
	code = resp.code,
	redirect_uri = 'https://survey.surf',
	Authorization = auth
}

resp = requests.post(url = post_url,data = params)

if(resp.status_code == requests.codes.ok):
	os.environ["REFRESHTOKEN"] = resp.refresh_token
	os.environ["ACCESSTOKEN"] = resp.access_token