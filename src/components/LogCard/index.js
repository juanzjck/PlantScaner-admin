import React from 'react'
import { Td, Image } from './styles'

export const LogCard = ({ data }) =>{
    return (
        <>
            <Td>{data.user.firstName} {data.user.lastName}</Td>
            <Td>{data.action}</Td>
            <Td>{data.createdAt}</Td>
        </>
    )
}
