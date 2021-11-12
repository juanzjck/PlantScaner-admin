import React from 'react'
import { WrappIcons, LinkWrapp, Wrapp, P, Span, WrappDate, WrappIcon } from './styles'
import { IoIosClock } from 'react-icons/io'
import { BsTrashFill } from 'react-icons/bs'

export const PlantCard = ({ _id, data, handleTryToDelete }) =>{

    const handleDelete = () => handleTryToDelete(data._id)

    return (
        <Wrapp>
            <LinkWrapp to={`/plants/edit/${data._id}`}>
                <P><strong>Nombre:</strong> {data.name}</P>
                <P><strong>Nombre Científico:</strong> {data.scientificName}</P>
                <P><strong>Descripción:</strong> {data.description}</P>
            </LinkWrapp>
            <WrappIcons>
                <WrappIcon>
                    <BsTrashFill onClick={handleDelete} size={20} color="red"/>
                </WrappIcon>
            </WrappIcons>
        </Wrapp>
    )
}
