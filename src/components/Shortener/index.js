import React,{useState} from 'react'
import axios from 'axios';
import {Container} from './style'


export const Shortner = () => {

    const [ link, setLink ] = useState('')
    console.log(link)
    
    async function getContent() {
        try {
            const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`);
            // console.log(response.data.result.short_link)
            console.log(response)
        } catch(error) {
            if(error.response) {
                console.log(error.response)
                
            }
        }
        
    }

    return(
        <>
            <Container>
            <input type="text" placeholder='url' onChange={(e) => {setLink(e.target.value)}}></input>
            <button type="button" onClick={getContent}>send</button>
            </Container>
        </>
    );
}