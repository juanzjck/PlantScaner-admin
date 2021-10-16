import styled from 'styled-components'
import {Link} from '@reach/router'


export const NavNote=styled.nav`
    position:fixed;
    flex-direction:column;
    z-index:10000;
    width:100%;
    min-height:100vh;
    background-image:linear-gradient(178deg, #1e49cb, #0c9ad38f);
    border-radius:20px;
    display:flex;
    justify-content:space-around;
`

export const ItemNav=styled.a`
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &:hover{
        font-weight:bold;

    }
`


export const ButtonOpenNav= styled.a`
    position:fixed;
    z-index:10000;
    padding:20px;
    background-image:linear-gradient(178deg, #1e49cb, #0c9ad38f);
    &.onShow{
        width: 100%;
        border-radius:200px;
        background-image:linear-gradient(178deg, transparent, transparent);
    }
`

export const WrappButtons = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    
`
export const WrappButtonOpenNav= styled.div`
    position:fixed;
    top:0;
    width:100%;
`

export const WrappDisclamer = styled.div`
    padding:10px;
`
export const LinkButton=styled(Link)`
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &:hover{
        font-weight:bold;

    }
`