import React, { useState } from 'react'
import { connect } from 'react-redux'
import { WrappIcons, LinkWrapp, Wrapp, P, Span, WrappDate, WrappIcon } from './styles'
import { BsTrashFill } from 'react-icons/bs'

import { ModalDelete } from '../ModalDelete'


export const TrainingCard = ({ data, handleTryToDelete, loading, dispatch, deleteIteration }) =>{
    const [showModal, setShowModal] = useState(false)
    const [selectedId, setSelectedId] = useState('')

    const handleDelete = () => {
        setShowModal(true)
        setSelectedId(data._id)
        // dispatch({
        //     type: 'SHOW_MODAL_DELETE',
        //     payload: true
        // });
        // handleTryToDelete(data._id)
    }

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
            <ModalDelete 
                itemName="un entrenamiento"
                confirmButton={deleteIteration}
                selectedId={selectedId} 
                modalIsOpen={showModal}
                handleClose={() => setShowModal(false)}
            />
        </Wrapp>
    )
}
