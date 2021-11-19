import React from 'react'
import { WrappIcons, LinkWrapp, Wrapp, P, WrappIcon, Td, Th, Image } from './styles'
import { BsTrashFill } from 'react-icons/bs'

export const ImageCard = ({ data, handleTryToDelete }) =>{

    const handleDelete = () => handleTryToDelete(data._id)

    const onClick = text => navigator.clipboard.writeText(text)

    return (
        <>
            <Td click onClick={() => onClick(data._id)} title="Click to copy to Clipboard">{data._id}</Td>
            <Td>{data.name}</Td>
            <Td>
                <Image click src={data.url} onClick={() => window.open(data.url, '_blank')} />
            </Td>
            <Td><BsTrashFill onClick={handleDelete} size={20} color="red"/></Td>
        </>
    )
}
