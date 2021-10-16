import React, { Fragment } from  'react'
import {WrappPage,ErrorMessage} from './styles'

export const LayoutPageRegister = ({children,error}) =>{
    return(
        <WrappPage>
            {children}
            {error!=''&&<ErrorMessage>Error-{error}</ErrorMessage>}
        </WrappPage>
    )
}