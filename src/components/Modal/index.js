import React  from 'react'
import {useValue} from '../../hook/useValue'
import Modal from 'react-modal';
import { Select,Input,ButtonClose,Button } from '../../styles/inputs'
import {WrappButtonClose} from './styles'

Modal.setAppElement('#modal')

export const ModalLayout = ({title,children,modalIsOpen}) =>{
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          background            : 'transparent(-50%, -50%)',
          border                : 'none'
        }
      };
    
    return(
        <Modal
        isOpen={modalIsOpen.value}
        style={customStyles}
        contentLabel={title}
      >
        <WrappButtonClose>
          
          <ButtonClose onClick={()=>modalIsOpen.onChange(false)}>
              X
          </ButtonClose>
        </WrappButtonClose>

  

          {children}
      </Modal>
    )
}