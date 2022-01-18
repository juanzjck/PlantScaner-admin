import React from 'react'

import  LOADING_GIF from '../../assets/loading_standar.gif'
import  ModalLayout  from '../Modal'
import { Image } from './styles'

export const Loading = ({modalIsOpen}) =>{
    return(
      <ModalLayout showButtons={false} title='' modalIsOpen={modalIsOpen}>
        <Image>
         <img src={LOADING_GIF}/>
        </Image>
      </ModalLayout>
    )
}