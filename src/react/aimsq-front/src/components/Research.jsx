import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../assets/logo.png";
import axios from "axios";


function Research() { 

    const [inputValue, setInputValue] = useState("")
    const [paraValue, setParaValue] = useState([])
    const [isSimialar, setSimilar] = useState(false);
    const [similarArtist, setSimilarArtist] = useState([]);

    const searchArtist = async (e) => {
        try {
             const requestResult = await axios.post("http://127.0.0.1:8000/getArtistAlbum", { "artist" : e})
             setParaValue(requestResult.data.albums)
             searchSimilar(inputValue);
             setSimilar(true);
        } catch(e) {
            console.error("Erreur API :", e);
        }
    }

    const searchSimilar = async () => {
        try {
             const similarRequestResult = await axios.post("http://127.0.0.1:8000/similarArtist", { "artist" : inputValue})
             setSimilarArtist(similarRequestResult.data.Message.artists)
        } catch(e) {
            console.error("Erreur API :", e);
        }
    }

    return (
        <>
            <div class="all">
                <div class="research-bar">
                    <div class="center-img">
                        <img src={logo} alt="logo" width="200" height="200"/>
                    </div>
                    <div class="input-group input-group">
                        <input class="form-control" type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder=' An artist ? A group ?'
                        />
                        <button class="btn btn-outline-secondary"
                            onClick={() => {
                                searchArtist(inputValue);
                            }}
                            >Search</button>
                    </div>
                </div>
                <div class="result-request">
                    <div class="all-album">
                        {paraValue.map((album) => (
                            <div class="album">
                                <div class="border">
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
                            </div>
                            
                        ))}

                    </div>
                    {isSimialar &&
                        <div class="similar">
                            <div class="similar-border">
                                <h4>Similar Artists</h4>
                                <div>
                                    <ul>
                                        {similarArtist.map((similar) => (
                                        <li>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                searchArtist(similar);
                                            }}>
                                                {similar}
                                            </a>
                                        </li>)
                                    )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Research