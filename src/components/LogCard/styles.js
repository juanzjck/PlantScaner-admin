import styled from 'styled-components'
import { Link } from '@reach/router'

export const Td = styled.td`
    padding: 15px;
    text-align: center;
`

export const Image = styled.img`
    max-width: 100px;
    max-height: 100px;
    cursor: ${props => props.click ? 'pointer' : 'default'};
`
