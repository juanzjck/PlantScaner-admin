import styled from 'styled-components'
import { Link } from '@reach/router'
export const Button = styled.button`
    padding:10px;
    border: 1px solid #ccc;
    border-radius:20px;
    background:#2857ce;
    cursor: pointer;
    color:white;
    font-weight:bold;
    font-size:15px;
    &:disabled{
        opacity:.1;
    }
    &.cancel {
        background-color: red;
    }
    min-width: 250px;
;
`

export const Input = styled.input`
    padding:10px;
    margin:10px;
    border: 1px solid #ccc;
    outline: none;
    border-radius:20px;
    text-align:center;
    &:focus{
        border: 2px solid #1e49cb;
        border-radius:20px;
    }
    min-width: 250px;
`

export const Select = styled.select`
    padding:10px;
    margin:10px;
    border: 1px solid #ccc;
    outline: none;
    border-radius:20px;
    text-align:center;
    &:focus{
        border: 2px solid #1e49cb;
        border-radius:20px;
    }
    min-width: 250px;
`

export const CheckBox=styled.input`

`
export const Label=styled.label`
    display:block;
    min-width:200px;
`

export const ButtonClose=styled.button`
    left:100;
    background-color:red;
    padding:5px;
    border-radius:20px;
    margin:0px;
    height:30px;
    width:30px;
    color:white;
    margin:10px;
    &:hover{
        background-color:#ee5757;   
    }
`


export const ButtonNavigate = styled(Link)`
    padding:10px;
    border: 1px solid #ccc;
    border-radius:20px;
    background:#2857ce;
    color:white;
    font-weight:bold;
    font-size:15px;
    &:disabled{
        opacity:.1;
    }
    display:flex;
    justify-content: space-around;
    align-items: center;
    min-width:200px;
    text-decoration: none;
    &:disabled{
        opacity:.1;
    }
    &.cancel {
        background-color: red;
    }
;
`

export const Form=styled.form`
    margin: 10px;
    padding: 20px;
    text-align: center;
    -webkit-box-shadow: -4px 0px 15px -6px #000000; 
    box-shadow: -4px 0px 15px -6px #000000;
`
export const InputDevider=styled.div`
    margin: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Title=styled.h1`
 text-align: center;
`

export const TextArea=styled.textarea`
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 20px;
    text-align: center;
    &:focus {
        border: 2px solid #1e49cb;
        border-radius: 20px;
    }
    min-width: 700px;
    min-height: 150px;
`