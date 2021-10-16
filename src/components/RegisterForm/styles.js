import styled from 'styled-components'

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    padding:25px;
    box-shadow:10px 10px 10px 10px  #00000047;
    margin:30px;
    border: 1px solid #ccc;
    border-radius:20px;
    background: #fff;
`
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

export const Title=styled.h2`
    text-align:center;
    color:white;
    font-weight:bold;
`

export const WrappButtonReturn=styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:10px 0px; 
`