import styled from 'styled-components'
import { Link } from '@reach/router'

export const Wrapp = styled.div`
    min-height: 100px;
    background: white;
    padding: 10px;
    display: flex;
`

export const P = styled.p`
    overflow: auto;
    &.date{
        margin: 0px 10px 0px 10px;
    }
`

export const WrappIcon = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    cursor: pointer;
`

export const WrappIcons = styled.div``

export const LinkWrapp = styled(Link)`
    color: black;
    text-decoration: none;
    width: 100%;
`

export const Td = styled.td`
    padding: 15px;
    cursor: ${props => props.click ? 'pointer' : 'default'};
`

export const Th = styled.th`
`
