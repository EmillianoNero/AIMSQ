import requests
import json
from app.soptifyApi.spotifyConnection import getToken

token = getToken()

# récupère les infos principale d'un artiste
def getArtistInfo(name: str):
    url = f"https://api.spotify.com/v1/search?q={name}&type=artist&limit=1"
    headers = {"Authorization": f"Bearer {token}"}
    resp = requests.get(url, headers=headers)
    resp.raise_for_status()
    return resp.json()

# récupère l'id d'un artiste
def getArtistId(name: str):
    return getArtistInfo(name)["artists"]["items"][0]["id"]

# get all artist album 
def getArtistAlbum(id: str):
    url = f"https://api.spotify.com/v1/artists/{id}/albums"
    headers = {"Authorization": f"Bearer {token}"}
    resp = requests.get(url, headers=headers)
    resp.raise_for_status()
    data = []
    for item in resp.json()['items'] :
        data.append({"name" : item["name"], 
                     "total_tracks": item["total_tracks"], 
                     "release_date": item["release_date"], 
                     "img": item["images"][0]["url"]})
    return {"albums" : data }


#def getArtistTrackList(id: str):