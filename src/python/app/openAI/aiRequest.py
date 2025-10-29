import os
from dotenv import load_dotenv
from openai import OpenAI
from app.openAI.messageProcessing import getArtist

load_dotenv()
# get .env variable
client = OpenAI(
    api_key=os.environ["OPENAI_API_KEY"], # key setup in grok website
    base_url=os.environ["OPENAI_BASE_URL"] # link to grok
)

# ask ai api and return response
def getAiArtistResponse(mess: str):
    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": "Give me three artist names similar to " + mess}]
    )
    return getArtist(response.choices[0].message.content)

    
