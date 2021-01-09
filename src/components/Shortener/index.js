import React,{useState} from 'react'
import axios from 'axios';
import {Container} from './style'
import {List} from '../List'

export const Shortner = () => {

    const [ link, setLink ] = useState('')
    const [data, setData] = useState([])
    // console.log(data)
    
    async function getContent() {
        try {
            const response = await axios.get(`https://api.shrtco.de/v2/shorten${link ? '?url='+link+'/very/long/link.html' : ''}`);
            // console.log(response.data.result.short_link)
            setData([...data, response.data])

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
            <List data={data}/>
        </>
    );
}