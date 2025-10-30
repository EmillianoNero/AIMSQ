from fastapi import FastAPI
from app.requestBody.search import Search
from app.openAI.aiRequest import getAiArtistResponse
from app.soptifyApi.spotifyRequest import getArtistId, getArtistAlbum, getArtistTrackList

app=FastAPI()

@app.get('/hello')
def helloWorld():
    return{'Hello':'World'}

@app.post('/similarArtist')
def getSimilarArtist(s : Search):
    return{'Message': getAiArtistResponse(s.artist)}

@app.get('/getArtistId')
def getArtId(s : Search):
    return { "id": getArtistId(s.artist)}

@app.get('/getArtistAlbum')
def getAlbum(s : Search):
    id = getArtistId(s.artist)
    return getArtistAlbum(id)

#@app.get('/getArtistTracks')
#def getAlbum(s : Search):
#    id = getArtistId(s.artist)
#    return getArtistTrackList(id)