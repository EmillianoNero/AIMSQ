import { useState } from 'react'
import './research.css'
import axios from "axios";

function Research() { 

    const [inputValue, setInputValue] = useState("")
    const [paraValue, setParaValue] = useState([])

    const searchArtist = async () => {
        try {
             const requestResult = await axios.post("http://127.0.0.1:8000/getArtistAlbum", { "artist" : inputValue})
             setParaValue(requestResult.data.albums)
        } catch(e) {
            console.error("Erreur API :", e);
        }
    }

    return (
        <>
        <div>
            <input type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => searchArtist(inputValue)}
                >Search</button>
        </div>
        <br/>
        <div class="all-album">
            {paraValue.map((album) => (
                <div class="album">
                    <h3 class="name-album">{album.name}</h3>
                    <div class="info-album">
                        <div class="description">
                            <ul>
                                <li>Track(s) : {album.total_tracks}</li>
                                <li>Release date : {album.release_date}</li>
                            </ul>
                        </div>
                        <div class="imageAlbum">
                            <img src={album.img} alt={album.name} class="album-img"/>
                        </div>
                    </div>
                </div>
                
            ))}

        </div>
        </>
    )
}

export default Research