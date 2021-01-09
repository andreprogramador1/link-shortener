import styled from 'styled-components'
import backMobile from '../../images/bg-shorten-mobile.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    background-image: url(${backMobile});
    /* background-color: aliceblue; */
    padding: 20px;
    border-radius: 15px;
    background-color: #5f4a77;
    margin: 0 70px;
    background-size: cover;

    input {
        border: 1px solid #ccc;
        padding: 13px 50px;
        border-radius: 6px;
    }

    button {
        background-color: turquoise;
        border-radius: 6px;
        padding: 13px 120px;
        color: white;
        border: none;
        margin-top: 20px;
        cursor: pointer;
    }
    
`;