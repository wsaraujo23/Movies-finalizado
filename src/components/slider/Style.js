import { styled } from 'styled-components'

export const Container = styled.div`
padding-top:10px;

h1{
    /* border: solid red ; */
    width: 160px;
   margin: 10px 0 0 20px;
   font-weight: 500;
   font-size:20px ;
   letter-spacing: 1px;
   text-transform: uppercase;
   text-align: center;
   background-image: linear-gradient(to right, #232526 0%, #414345 51%, #232526 100%);
   color: #fff;
   border-radius: 5px;
   &:hover{
    background: linear-gradient(98deg, rgba(29,11,11,1) 13%, rgba(44,43,51,1) 66%);

   }
   
}

.swiper{
/* background: #0001; */
width: 100%;
display: flex;
align-items: center;
margin-top: 15px;
overflow-x: hidden;
}

.swiper-wrapper{
    display: flex;
    align-items: start;
    background: linear-gradient(98deg, rgba(29,11,11,1) 13%, rgba(44,43,51,1) 66%);
    padding-top: 10px;
}

`