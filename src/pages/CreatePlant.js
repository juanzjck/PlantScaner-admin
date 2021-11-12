import React, { useEffect } from 'react'
import { PlantForm } from '../components/PlantForm'
import  LayoutPage  from '../components/LayoutPage'
import { CreatePlant as PlantCreate } from '../containers/CreatePlant'
import { Loading } from '../components/Loading'
import { connect } from 'react-redux'

const CreatePlant = ({ dispatch }) => {

    const handleSubmit = (onSubmit, input) => onSubmit({ variables: { input  } })

    const onCompleted = data => {
        dispatch({ type:'SET_SUCCESS', payload: 'La planta fue creada exitosamente.' })
        dispatch({ type:'SET_ERROR', payload: '' })
        window.location.href='/plants'
    }

    const onError = data => {
        dispatch({ type:'SET_SUCCESS', payload: '' })
        dispatch({
            type:'SET_ERROR',
            payload: `Ocurrio un error al crear la planta: Puede ser que uno de los campos este erroneo.`
        })
    }

    useEffect(() => {
        dispatch({ type:'CLEAN_MESSAGES' }) 
    }, [])

    return (
        <LayoutPage title='Nueva Planta'>
            <PlantCreate onError={onError} onCompleted={onCompleted}>
                {(mutation, { loading }) => {
                    return <>
                        <Loading modalIsOpen={loading}/>
                        <PlantForm onSubmit={e => handleSubmit(mutation, e)} />
                    </>
                }}
            </PlantCreate>
        </LayoutPage> 
    )
}

export default connect() (CreatePlant)
