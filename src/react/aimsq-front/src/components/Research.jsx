import { useState } from 'react'
import './research.css'

function Research() { 

    const [inputValue, setInputValue] = useState("")
    const [paraValue, setParaValue] = useState("")

    return (
        <>
        <div>
            <input type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => setParaValue(inputValue)}
                >Search</button>
        </div>
        <br/>
        <p>{paraValue}</p>
        </>
    )
}

export default Research