import React  from 'react'
import {useValue} from '../../hook/useValue'
import Modal from 'react-modal';
import { Select,Input,ButtonClose,Button } from '../../styles/inputs'
import {WrappButtonClose} from './styles'
import {connect} from 'react-redux'
Modal.setAppElement('#modal')

const ModalLayout = ({title,children,modalIsOpen, dispatch, showButtons=true, handleClose}) =>{
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          background            : 'transparent(-50%, -50%)',
          borderRadius          : '25px',
          width                 : '40%',
          backgroundColor       : '#fff',
          padding               : '50px',
        }
      };
    const close = () => {
      dispatch({
        type: 'SHOW_MODAL_DELETE',
        payload: false
      })
    }
    return(
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel={title}
      >
        <WrappButtonClose>
          
          <ButtonClose onClick={()=> { handleClose ? handleClose() : close() }} hidden={!showButtons}>
              X
          </ButtonClose>
        </WrappButtonClose>

  

       {children}

         
      </Modal>
    )
}

export default connect()(ModalLayout)