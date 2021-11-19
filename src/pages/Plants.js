import React, { useState, useEffect } from 'react'
import { PlantsList } from '../components/PlantsList'
import  LayoutPage  from '../components/LayoutPage'
import { ModalDelete } from '../components/ModalDelete'
import { connect } from 'react-redux'
import { GetPlants } from '../containers/GetPlants'
import { DeletePlant } from '../containers/DeletePlant'

const Plants = props => {
    const [selectedId, setSelectedId] = useState(); 

    const handleDelete = id => {
        props.dispatch({ type: 'SHOW_MODAL_DELETE', payload: true })
        setSelectedId(id)
    }

    const completeDelete = () => {
        props.dispatch({ type: 'SHOW_MODAL_DELETE', payload: false })
        props.dispatch({ type: 'SET_SUCCESS', payload: 'La Planta fue eliminada exitosamente' })
        props.dispatch({ type: 'SET_ERROR', payload: '' })
        setSelectedId(0)
        window.location.href = '/plants'
    }

    const errorDelete = data => {
        props.dispatch({ type: 'SHOW_MODAL_DELETE', payload: false })
        props.dispatch({ type:'SET_SUCCESS', payload: '' })
        props.dispatch({ type:'SET_ERROR', payload: 'No se pudo eliminar la planta. ' + data })
    }

    useEffect(() => {
        props.dispatch({ type: 'CLEAN_MESSAGES' }) 
    }, [])

    return (
        <LayoutPage title='Plantas'>
            <GetPlants>
                {({ data, refetch }) => {
                    if (data)
                        return <PlantsList data={data.getPlants} handleTryToDelete={handleDelete} refetch={refetch} />
                    else return null
                }}
            </GetPlants>
            <DeletePlant onError={errorDelete} onCompleted={completeDelete}>
                {deletePlant => {
                        return (
                            <ModalDelete 
                                itemName="una planta"
                                confirmButton={deletePlant}
                                selectedId={selectedId} 
                                modalIsOpen={props.showModalDelete}
                            />
                        )
                    }
                }
            </DeletePlant>
        </LayoutPage> 
    )
}

function mapStateToProps(state) {
    return {
        showModalDelete: state.modal.showModalDelete,
        selectedNote: state.note.selectedNote
    }
}

export default connect(mapStateToProps)(Plants)
