import React,{useState} from 'react'
import axios from 'axios';
// import api from '../services/api'


export const Shortner = () => {

    const [ link, setLink ] = useState('')
    console.log(link)
    
    async function getContent() {
        const response = await axios.post(`https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`);
        console.log(response.data.result.short_link)
    }

    return(
        <>
            <input type="text" placeholder='url' onChange={(e) => {setLink(e.target.value)}}></input>
            <button type="button" onClick={getContent}>send</button>
        </>
    );
}