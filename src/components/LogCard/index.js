import React from 'react'
import { Td, Image } from './styles'

export const LogCard = ({ data }) =>{

    const getDate = () => {
        console.log(data.createdAt)
        const date = new Date(parseInt(data.createdAt))
        return date.toLocaleDateString()
    }


    return (
        <>
            <Td>{data.user.firstName} {data.user.lastName}</Td>
            <Td>{data.action}</Td>
            <Td>{getDate()}</Td>

        </>
    )
}
