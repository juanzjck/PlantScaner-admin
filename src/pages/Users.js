import React, {useState} from 'react'
import { UsersList } from '../components/UsersList'
import  LayoutPage  from '../components/LayoutPage'
import { ModalDelete } from '../components/ModalDelete'
import {connect} from 'react-redux'
import {UserQuery} from '../containers/Users'
import {DeleteUser} from '../containers/DeleteUser'

const Users = (props) => {
    const [selectedId, setSelectedId ] = useState(); 
    const handleDelete =(id)=> {
        props.dispatch({
            type:'SHOW_MODAL_DELETE',
            payload:true
        });
        setSelectedId(id)
    }
    const completeDelete = (data) => {
        props.dispatch({
            type:'SHOW_MODAL_DELETE',
            payload:false
        });
        props.dispatch({
            type:'SET_SUCCESS',
            payload: 'El usuario fue eliminado exitosamente'
        })
        props.dispatch({
            type:'SET_ERROR',
            payload: ''
        })
        setSelectedId(0)
        window.location.href='/users'

    }
    const errorDelete = (data) => {
        props.dispatch({
            type:'SHOW_MODAL_DELETE',
            payload:false
        });
        props.dispatch({
            type:'SET_SUCCESS',
            payload: ''
        })
        props.dispatch({
            type:'SET_ERROR',
            payload: 'No se pudo eliminar usuario' + data
        })

    }
    return(
        <LayoutPage title='Usuarios'>
            <UserQuery>
                {
                    ({data})=>{
                        console.log(data)
                        if(data){
                            return (
                                <UsersList
                                  data={data.getUsers}
                                  handleTryToDelete={handleDelete}
                                  >
                                </UsersList>
                              )
                        }
                        return (
                            <></>
                        )
                    }
                }
            </UserQuery>
      <DeleteUser onError={errorDelete}  onCompleted={completeDelete}>
        {
            (deleteUser) => {
                return (
                    <ModalDelete 
                    itemName="un usuario"
                   
                    confirmButton={(e)=>deleteUser(e)}
                    selectedId={selectedId} 
                    modalIsOpen={props.showModalDelete}/>
                )
            }
        }
      </DeleteUser>
     
        </LayoutPage> 
    )
}
function mapStateToProps(state){
    return{
        showModalDelete:state.modal.showModalDelete,
        selectedNote:state.note.selectedNote
    }
}
export default connect(mapStateToProps)(Users)