import React, { Fragment, useEffect } from 'react'
import { ListOfNotes } from '../components/ListOfNotes'
import { NavBar } from '../components/NavBar'
import {Dashboard} from '../components/DashBoard'
import { ListNoteContainer } from '../containers/ListNoteContainer'
import { ModalDelete } from '../components/ModalDelete'
import {connect} from 'react-redux'
import {DeleteNote} from '../containers/DeleteNote'
import {ModalLayout} from '../components/Modal'
import { NotesConfig } from '../components/NotesConfig'
import { LayoutPage } from '../components/LayoutPage'
const Notes= (props) =>{
    const handleCancel = (e) =>{
        props.dispatch({
            type:'SHOW_MODAL_DELETE',
            payload:false
        })
    }
    const handleTryToDelete = (id) =>{
        props.dispatch({
            type:'SHOW_MODAL_DELETE',
            payload:true
        })
        props.dispatch({
            type:'SET_SELECTED_NOTE',
            payload:id
        })
    }
    useEffect(function(){
        console.log('dd')
    })
     return(
         <LayoutPage title='Dashboard'>
                <Fragment>
                <NavBar></NavBar>
                <br></br>
                <Dashboard />
                <br></br>
                <ListNoteContainer>
                    {({data,loading, error,refetch})=>{
                        if(loading) return<h1>Loading...</h1>
                        if(error) return<h1>{error}</h1>
                        return (
                            <Fragment>
                                <ListOfNotes  handleTryToDelete={handleTryToDelete} data={data.getNotes}/>
                                <DeleteNote>
                                    {
                                        (mutation,{loading,data})=>{
                                            if(loading)return<h2>Cargando..</h2>
                                    
                                            const deleteNote=(variables)=>{
                                                mutation(variables)
                                                props.dispatch({
                                                    type:'SHOW_MODAL_DELETE',
                                                    payload:false
                                                })
                                                setTimeout(
                                                    ()=>{
                                                        refetch()
                                                    }
                                                ,500)
                                                
                                            }
                                            return(
                                                <ModalDelete
                                                    modalIsOpen={props.showModalDelete}
                                                    cancelButton={handleCancel}
                                                    confirmButton={deleteNote}
                                                    selectedId={props.selectedNote}
                                                />
                                            )
                                        }
                                    }
                                </DeleteNote> 
                            
                                
                            
                            </Fragment>
                        
                        )
                }}
                </ListNoteContainer>
            
            
            </Fragment>
         </LayoutPage>
    )
}
function mapStateToProps(state){
    return{
        showModalDelete:state.modal.showModalDelete,
        selectedNote:state.note.selectedNote
    }
}
export default connect(mapStateToProps)(Notes)