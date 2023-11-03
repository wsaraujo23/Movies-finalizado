import { styled } from "styled-components"

export const Background = styled.div`
/* border: solid red; */
width: 100%;
height: 100vh;
position: absolute;
z-index: 3;
background: rgba(0,0,0,.6);
display: flex;
justify-content: center;
align-items: center;

`



export const Btnx = styled.button`
z-index: 3;
position: absolute;
top: 300px;
padding: 5px 10px;
border-radius: 100px;
background: rgba(0,0,0,.3);
color:#fff;
border: none;

&:hover{
background: rgba(0,0,0,.6);
transform: scale(1.5);
}

`


export const Caixa = styled.div`
/* border: solid green; */
width: 50%;
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
background: #fffd;
border-radius: 5px;
position: fixed;
max-width: 600px;


iframe{
    width: 100%;
    border: none;
}

`



