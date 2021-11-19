import React from 'react'
import PlantForm from '../components/PlantForm'
import LayoutPage from '../components/LayoutPage'
import { GetPlant } from '../containers/GetPlant'
import { Loading } from '../components/Loading'
import { EditPlant as UpdatePlant } from '../containers/EditPlant'
import { connect } from 'react-redux'

const EditPlant = ({ id, dispatch }) => {

    const handleEdit = (edit, input) => edit({ variables: { id, input }})

    const compliteEdit = data => {
        dispatch({ type:'SET_SUCCESS', payload: 'La planta fue editada exitosamente' })
        dispatch({ type: 'SET_ERROR', payload: '' })
    }

    const errorEdit = data => {
        dispatch({ type: 'SET_SUCCESS', payload: '' })
        dispatch({
            type:'SET_ERROR',
            payload: 'Ocurrio un error a tratar de editar al usuario' + data.erros.message
        })
    }
    
    return(
        <GetPlant id={id}>
            {({ data, loading }) => {
                <Loading modalIsOpen={loading} />
                if (data) {
                    return <UpdatePlant onError={data => compliteEdit(data)} onCompleted={data => errorEdit(data)}>
                        {(edit, { loading }) => {
                            return (
                                <LayoutPage title='Editar Planta'>
                                    <Loading modalIsOpen={loading}/>
                                    <PlantForm 
                                        backButton="volver" buttonText="Editar" onSubmit={e => handleEdit(edit, e)} 
                                        title="Editar Planta" data={data.getPlantById} 
                                    />
                                </LayoutPage> 
                            )
                        }}
                    </UpdatePlant>
                } else return null
            }}
        </GetPlant>
    )
}

export default connect()(EditPlant)
