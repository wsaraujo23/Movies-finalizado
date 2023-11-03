import { styled } from 'styled-components'


export const Caixa = styled.div`
/* border: solid 1px red; */
justify-content: space-around;
align-items: center;
display: flex;
z-index: 99;
position: fixed;
top: 0;
width: 100%;
height: 70px;
background: linear-gradient(98deg, rgba(29,11,11,1) 13%, rgba(44,43,51,1) 66%);
`
export const Imagem = styled.img`
/* border: solid red 1px; */
width:70px;
border-radius: 5px;


`
export const Menu = styled.div`
/* border: solid 1px red; */
width: 400px;
display: flex;
justify-content: space-around;
align-items: center;

`
export const Li = styled.li`
/* border: solid 1px red; */





a{
    color: red;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 5px;
    width: 70px;
    text-align: center;
    border: solid 1px red;  
padding: 3px 4px;

    &:hover{
    color: #fff;
    border: solid 1px white;  

}

&:active{
    color: #fff8;


}

}

`
