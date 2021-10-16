import styled  from 'styled-components'
import {css,keyframes} from 'styled-components'

export const WrappPage=styled.div`
     background-image:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
     background-size: 400% 400%;
     height:100vh;  
     animation:1s ${particles};
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

export const  ErrorMessage=styled.h2`
    color:red;
    text-align:center;
`