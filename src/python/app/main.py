from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.requestBody.search import Search
from app.openAI.aiRequest import getAiArtistResponse
from app.soptifyApi.spotifyRequest import getArtistId, getArtistAlbum

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],    # ou ["http://localhost:5173"] pour React
    allow_credentials=True,
    allow_methods=["*"],    # autorise OPTIONS automatiquement
    allow_headers=["*"],
)

@app.get('/hello')
def helloWorld():
    return{'Hello':'World'}

@app.post('/similarArtist')
def getSimilarArtist(s : Search):
    return{'Message': getAiArtistResponse(s.artist)}

@app.get('/getArtistId')
def getArtId(s : Search):
    return { "id": getArtistId(s.artist)}

@app.post('/getArtistAlbum')
def getAlbum(s : Search):
    id = getArtistId(s.artist)
    return getArtistAlbum(id)

#@app.get('/getArtistTracks')
#def getAlbum(s : Search):
#    id = getArtistId(s.artist)
#    return getArtistTrackList(id)