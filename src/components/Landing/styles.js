import styled,{css,keyframes}  from 'styled-components'
import {Link} from '@reach/router'
import background_note from '../../assets/note_background.jpg'
export const LandingHeader=styled.div`
    width:100%;
    height:100vh;
    background-image:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
    animation:1s ${particles};
   /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 400% 400%;
`
const particles = keyframes`
    0% {
       opacity:0;
    }
    50% {
        opacity:.5;
    }
    100% {
       opacity:1;
    }
`

export const Banner=styled.div`
    width:100%;
    padding:10px;
    color:white;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`
export const Title=styled.h1`
    font-size:40px;
    font-weight:bold;
`
export const Button=styled(Link)`
    background-color:white;
    padding:15px;
    margin:10px;
    border-radius:20px;
    font-size:20px;
    text-decoration:none;
    box-shadow:5px 5px 5px 5px #5858583b;
    font-weight:#eeeeee;
    &:hover{
        background-color:#f8f4f4;
        font-weight:bold;
    }
    &.blue{
        background-color:#2857ce;
        color:white;
        &:hover{
            background-color:#2350cc;
        }
    }
`

export const WrappButtons=styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    padding:10px;
 

`

export const P=styled.p`
    font-size:20px;
    text-align:center;
    &.sub_p{
        font-weight:bold;
    }
    &.p_banner{
        font-size:30px;
    }
    margin:10px;
`


export const WrappSection=styled.div`
    font-size:20px;
    display:flex;
    text-align:center;
    flex-direction:column;
    padding:20px;
    &.colored_background{
        background-image:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
        animation:1s ${particles};
        background-size: 400% 400%;
    /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        color:white;
    }
    &.note_background{
        background-image:url(${background_note});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
     
    }
`

export const IconImg=styled.img`
   width:10%;
   &.btc{
       height:auto;
   }
   &.paypal{
       height:auto;
   }
`

export const WrappIcones=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

`

export const WrappSectionContent=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:10px;
    &.box_background{
        background-color: #6fbce4ab;
        box-shadow: 4px 4px 4px 4px #1818186e;
        background-image: linear-gradient(-45deg,#ee77525c,#e73c7e63,#23a6d591,#23d5abc2);
        color: #fff;
    }

`


export const Li=styled.li`
    display:flex;
   // justify-content: space-between;
    align-items: center;
    color:green;
    margin:10px;
    @media(max-width: 630px){
        display: flex;
        flex-direction: column;
    }
`
export const Ul=styled.ul`
    @media(max-width: 630px){
        padding:0px;
    }
`

export const Pli=styled.p`
    text-align: -webkit-right;
    @media(max-width: 630px){
        text-align:center;
    }
`
export const DivTimeLine=styled.div`
 position: relative;
  max-width: 1200px;
  margin: 0 auto;
  &::after{
    content: '';
    position: absolute;
    width: 10px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;

  }
  @media (max-width: 630px){
    display: flex;
    overflow:scroll;
    &::after{
        display:none;
        
     }
     margin: 0;
  }
`

export const DivContainerTimeLine=styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  @media (max-width: 630px){
    padding: 2px 11px;
    position: initial;
    min-width: 276px;
    &::after{
        display:none;
    }
    &.left{
        &::before{
            display:none;
        }
     
    }
  }
  &::after{
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -15px;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  &.left{
    left: 0;
    &::before{
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
    }
  }
  &.right{
    left: 50%;
    &::after{
        left: -10px;
    }
    &::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }
  }
`

export const TimeLineItemContent=styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  color: #000;
  box-shadow: 10px 10px 10px #0000005e;
  @media (max-width: 630px){
    min-height: 390px;
  }

`

export const Img = styled.img `
    height: 500px;
    width: 500px;
    object-fit: contain;
`;
/*
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_timeline

*/