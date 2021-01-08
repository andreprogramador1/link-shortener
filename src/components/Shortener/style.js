import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    margin: auto;
    // background-image: url("../images/bg-shorten-mobile.svg");
    background-color: aliceblue;
    padding: 60px 50px;
    border-radius: 15px;

    input {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 6px;
        width: 200px;
    }

    button {
        background-color: turquoise;
        border-radius: 6px;
        padding: 10px 80px;
        color: white;
        border: none;
        margin-top: 20px;
        cursor: pointer;
}
    }
`;