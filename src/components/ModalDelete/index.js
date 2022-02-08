import React, { Fragment } from 'react'
import  ModalLayout from '../Modal'
import {Title,Container,ButtonDelete,ButtonCanel} from './styles'
 export const ModalDelete = ({itemName,selectedId,modalIsOpen,cancelButton,confirmButton, remove, handleClose}) =>{
    const hanldeConfirm = () =>{
       
        confirmButton({variables:{id:selectedId}})
      
    }
    return(
        <ModalLayout modalIsOpen={modalIsOpen} handleClose={handleClose}>
        
                    <Container>
                        <Title>Advertencia</Title>
                        <p>Estas a punto de borrar  {itemName} de la lista</p>            
                        <ButtonDelete onClick={remove ? remove : hanldeConfirm}>
                            Confirmar
                        </ButtonDelete>
               
                    </Container>
            
      
        </ModalLayout> 
    )
}