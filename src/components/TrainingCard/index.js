import React from 'react'
import { WrappIcons, LinkWrapp, Wrapp, P, Span, WrappDate, WrappIcon } from './styles'

import { BsTrashFill } from 'react-icons/bs'

export const TrainingCard = ({ data, handleTryToDelete, loading }) =>{


    const handleDelete = () => handleTryToDelete(data._id)

    return (
        <Wrapp>
            <LinkWrapp to={`/training/${data._id}`}>
                <P><strong>{data.generation}</strong></P>
                <P>{data.startDate}</P>
                {data.published ? 
                    <P><strong>Estado:</strong> Publicado</P> :
                    <P><strong>Estado:</strong> {data.status}</P>}
            </LinkWrapp>

            <WrappIcons>
                <WrappIcon>
                    <BsTrashFill onClick={handleDelete} size={20} color="red"/>
                </WrappIcon>
            </WrappIcons>

        </Wrapp>
    )
}
