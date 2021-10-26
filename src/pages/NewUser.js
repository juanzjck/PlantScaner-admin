import React, {useEffect} from 'react'
import { UserForm } from '../components/UserForm'
import  LayoutPage  from '../components/LayoutPage'
import { NewNoteContainer } from '../containers/NewUser';
import { Loading } from '../components/Loading';
import {connect} from 'react-redux'
const NewUser = ({dispatch}) => {
    const handleSubmit=(onSubmit,input)=>{ 
        onSubmit({
            variables:{
                input
            }
        });
    }
    const onCompleted = (data) => {
        dispatch({
            type:'SET_SUCCESS',
            payload: 'El usuario fue creado exitosamente'
        })
        dispatch({
            type:'SET_ERROR',
            payload: ''
        })
        window.location.href='/users'
    }
    const onError = (data) => {
        dispatch({
            type:'SET_SUCCESS',
            payload: ''
        })
        dispatch({
            type:'SET_ERROR',
            payload: `Ocurrio un error al crear usuario: Puede que uno de los campos este erroneo o que el correo ya esta registrado`
        })
    }
    useEffect(()=>{
        return ()=>{
            dispatch({
                type:'CLEAN_MESSAGES',
               
            }) 
        }
    })
    return(
        <LayoutPage title='Nuevo usuario'>
            <NewNoteContainer onError={onError} onCompleted={onCompleted}>
            {
                (mutation, {loading})=>{
               
                    return (
                        <>
                            <Loading modalIsOpen={loading}/>
                            <UserForm onSubmit={(e)=>handleSubmit(mutation,e)} />
                        </>
                       
                    )
                }
            }
            </NewNoteContainer>

        </LayoutPage> 
    )
}

export default connect()(NewUser)