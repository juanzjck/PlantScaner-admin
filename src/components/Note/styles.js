import styled  from 'styled-components'
import {Link} from '@reach/router'

export const WrapBody = styled.div`
    width:100%;
    margin:0px;
    background-color:grey;
   
    position: absolute;
`
export const WrapDescripcion = styled.div`
    width:100%;
    min-height:80vh;
    margin:0px;
    background-color:grey;
    display:flex;

`
export const InputTitle = styled.input`
    width:100%;
    font-size:20px;
    border: 1px solid #ccc;
    padding:5px;
    display:block;
    text-align:center;
    outline: none;
    min-height:10vh;
    max-height:10vh;
    &:focus{
        border: 2px solid #f08685;
       
    }
    &:disabled{
        opacity:.3
    }
`

export const InputKeyWords = styled.textarea`
    width:30%;
    font-size:20px;
    border: 1px solid #ccc;
    padding:5px;
    display:block;
    text-align:center;
    outline: none;
    &:focus{
        border: 2px solid #f08685;
       
    }
    &:disabled{
        opacity:.3
    }
`


export const InputDescription = styled.textarea`
    width:70%;
    font-size:20px;
    border: 1px solid #ccc;
    padding:5px;
    display:block;
    text-align:center;
    outline: none;
    &:focus{
        border: 2px solid #f08685;
       
    }
    &:disabled{
        opacity:.3
    }
`


export const InputSummary = styled.textarea`
    width:100%;
    font-size:20px;
    border: 1px solid #ccc;
    padding:5px;
    min-height:10vh;
    display:block;
    text-align:center;
    outline: none;
    &:focus{
        border: 2px solid #f08685;       
    }
    &:disabled{
        opacity:.3
    }
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