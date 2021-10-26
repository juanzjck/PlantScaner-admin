import React from 'react'

import  LOADING_GIF from '../../assets/loading_standar.gif'
import  ModalLayout  from '../Modal'

export const Loading = ({modalIsOpen}) =>{
    return(
      <ModalLayout showButtons={false} title='' modalIsOpen={modalIsOpen} >
         <img src={LOADING_GIF}/>
      </ModalLayout>
    )
}