from fastapi import FastAPI
from app.requestBody.search import Search
from app.openAI.aiRequest import getAiArtistResponse

app=FastAPI()

@app.get('/hello')
def helloWorld():
    return{'Hello':'World'}

@app.post('/artist')
def getArtist(s : Search):
    return{'Message':getAiArtistResponse(s.artist)}