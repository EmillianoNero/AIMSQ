from pydantic import BaseModel

class Search(BaseModel):
    artist: str
    