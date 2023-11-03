import { styled } from 'styled-components'

export const Container = styled.div`
background-image: url( ${(props) => props.img});
background-size: cover;
background-position: center;
height: 100vh;
color: #fff;
cursor: pointer;
margin-top: 65px;
/* border: solid red 1px; */

&::before{
    content: '';
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100vh;
}



`
export const Caixa = styled.div`
/* border: solid green 1px; */
max-width: 1500px;
width: 100%;
height: 100%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
/* padding-bottom: 270px; */


`






export const Info = styled.div`
/* border: solid red 1px; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 300px;
height: 300px;
letter-spacing: 1px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
z-index: 2;

h1{
    font-size: 20px;
    font-weight: 500;
    padding: 0 10px;


}

p{
    font-size: 14px;
    font-weight: 400;
    padding: 0 10px;


}


`



export const Poste = styled.div`
/* border: solid red 1px; */
margin-left: 100px;
z-index: 2;


`
export const LogoOne = styled.img`
/* border: solid red 1px; */
width: 200px;
/* height: 250px; */
border-radius: 10px;
display: flex;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
opacity: .6;

&:hover{
    opacity: .4;
    

}

`