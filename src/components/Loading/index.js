import React from 'react'

import  LOADING_GIF from '../../assets/loading_standar.gif'
import { ModalLayout } from '../Modal'

export const Loading = () =>{
    return(
      <ModalLayout title='' modalIsOpen={false} >
         <img src={LOADING_GIF}/>
      </ModalLayout>
    )
}