import styled from 'styled-components'
import { Link } from '@reach/router'

export const Span = styled.span`
    margin-right: 10px;
    margin-left: 10px;
`

export const SpanLink = styled.span`
    color: blue;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export const Images = styled.div`
    margin: 10px;
    padding: 20px;
    text-align: center;
    -webkit-box-shadow: -4px 0px 15px -6px #000000; 
    box-shadow: -4px 0px 15px -6px #000000;
    overflow-x:auto;
`

export const Tr = styled.tr`
    border-radius: 20px;
    box-shadow: 0px 0px 20px 1px grey;
`

export const Th = styled.th`
    min-width: 110px;
    padding: 8px;
`

export const Table = styled.table`
    width: 100%;
    border-spacing: 0 15px;
`

export const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    border-radius: 20px;
    padding: 70px;
    box-shadow: 0px 0px 20px 1px grey;
`
