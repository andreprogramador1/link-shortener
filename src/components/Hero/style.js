import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  align-items: center;

  svg {
    transform: scale(0.6);
    position: absolute;
    top: 0;

  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 400px;
    padding: 0 40px;
    margin-bottom: 80px;

    h1 {
      color: #2b2525;
      font-size: 45px;
    }

    p {
      color: #756969;
      font-weight: bold;
      font-size: 20px;
      line-height: 1.5;
    }

    button {
      background-color: turquoise;
      border: none;
      border-radius: 500px;
      font-weight: 800;
      font-size: 20px;
      color: white;
      padding: 13px 26px;
    }
  }
`;