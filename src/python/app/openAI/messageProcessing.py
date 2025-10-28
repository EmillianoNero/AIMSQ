import re

# Split input texte to search and return artists name
def getArtist(mess: str):
    #search artist name
    sep1 = mess.split("1. ")
    sep2 = sep1[1].split("2. ")
    sep3 = sep2[1].split("3. ")
    # Rzmove explanation, space and *
    artist1 = re.split(r'[:-]+', sep1[1])[0].strip().replace("*", "")
    artist2 = re.split(r'[:-]+', sep2[1])[0].strip().replace("*", "")
    artist3 = re.split(r'[:-]+', sep3[1])[0].strip().replace("*", "")
    return artist1, artist2, artist3


