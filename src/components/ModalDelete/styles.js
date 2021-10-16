import styled from 'styled-components'


export const Title=styled.h2`
    font-size:45px;
    font-weight:bold;
`

export const Container=styled.div`
    background-color:white;
    min-height:200px;
    min-width:200px;
    display:flex;
    flex-direction:column;
    padding:10px;
    justify-content:center;
    box-shadow: 5px 5px 5px 5px #80808069;
    border-radius:20px;
`

export const ButtonDelete=styled.button`
    padding:10px;
    background-color:red;
    border-radius:20px;
    margin:10px;
    color:white;
    font-weight:bold;
    &:hover{
        background-color:#ff5c5c;
    }
`
export const ButtonCanel=styled.button`
    padding:10px;
    background-color:blue;
    border-radius:20px;
    margin:10px;
    color:white;
    font-weight:bold;
    &:hover{
        background-color:#6a6af6;
    }
`