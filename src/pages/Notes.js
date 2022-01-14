import React, { Fragment, useEffect } from 'react'
import {Dashboard} from '../components/DashBoard'
import {connect} from 'react-redux'
import  LayoutPage  from '../components/LayoutPage'

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
                <br />
                <Dashboard />
                <br />
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