import styled from 'styled-components'


export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
    margin: 0;
    list-style: none;
    width: 100%;
    height: 100%;
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    list-style: none;
    width: 100%;
    height: 100%;
`

export const Recharge = styled.div`
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 50px;
    float: right;
    padding: 10px;
    cursor: pointer;
    &:hover{
        background-color: #CCC;   
    }
`
    