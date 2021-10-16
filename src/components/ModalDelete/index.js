import React, { Fragment } from 'react'
import  {ModalLayout} from '../Modal'
import {Title,Container,ButtonDelete,ButtonCanel} from './styles'
 export const ModalDelete = ({selectedId,modalIsOpen,cancelButton,confirmButton}) =>{
    const hanldeConfirm = () =>{

        confirmButton({variables:{id:selectedId}})
    }
    return(
        <ModalLayout modalIsOpen={modalIsOpen}>
            <Container>
                <Title>Advertencia</Title>
                <p>Estas a punto de borrar una nota</p>            
                <ButtonDelete onClick={hanldeConfirm}>
                    Confirmar
                </ButtonDelete>
                <ButtonCanel onClick={cancelButton}>
                    Cancelar
                </ButtonCanel>
            </Container>
        </ModalLayout> 
    )
}