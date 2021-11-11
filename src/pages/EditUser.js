import React from 'react'
import { UserForm } from '../components/UserForm'
import LayoutPage from '../components/LayoutPage'
import {User} from '../containers/User'
import { Loading } from '../components/Loading'
import { UserEdit } from '../containers/UserEdit'
import { connect } from 'react-redux'
 const EditUser = ({id,dispatch}) => {
    const handleEdit = (edit,input) => {
        edit({
            variables:{
                id,
                input
            }
        })
    }
    const compliteEdit = (data)=> {
        dispatch({
            type:'SET_SUCCESS',
            payload: 'El usuario fue editado exitosamente'
        })

        dispatch({
            type:'SET_ERROR',
            payload: ''
        })
    }
    const errorEdit = (data)=> {
        dispatch({
            type:'SET_SUCCESS',
            payload: ''
        })

        dispatch({
            type:'SET_ERROR',
            payload: 'Ocurrio un error a tratar de editar al usuario' + data.erros.message
        })
    }
    return(
        <User id={id} onCompleted={()=>console.log('')} onError={()=>console.log('')}>
            {
                ({data, loading})=>{
                    <Loading modalIsOpen={loading}></Loading>
                    if(data) {
                        console.log(data)
                        return(
                            <UserEdit onError={(data)=>compliteEdit(data)} onCompleted={(data)=>errorEdit(data)}>
                                {
                                    (edit,{loading})=>{
                                        return (
                                            <LayoutPage title='Editar usuario'>
                                                <Loading  modalIsOpen={loading}/>
                                               <UserForm  backButton="volver" buttonText="Editar" onSubmit={(e)=>handleEdit(edit,e)} title="Editar usuario"  data={data.getUser}  />
                                            </LayoutPage> 
                                        )
                                    }
                                }
                            </UserEdit>

                        )
                    }
                    return (
                        <></>
                    )
                }
            }
        </User>

    )
}
export default connect()(EditUser)