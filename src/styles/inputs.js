import styled from 'styled-components'

export const Button = styled.button`
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
`

export const CheckBox=styled.input`

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

