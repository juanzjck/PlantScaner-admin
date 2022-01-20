import React, { Fragment, useEffect } from 'react'
import { RegisterForm } from '../components/RegisterForm'
import {LayoutPageRegister} from '../components/LayoutPageRegister'
import { RegisterFormContainer } from '../containers/RegisterFormContainer'
import {useValue} from '../hook/useValue'
import  LayoutPage  from '../components/LayoutPage'
export const Register= ({history, dispatch}) =>{
    const errorMessage=useValue('')

    useEffect(() => {
        dispatch({ type: 'CLEAN_MESSAGES' }) 
    }, [])

    return(
        <LayoutPage title='Registro'>
            <RegisterFormContainer >
                {
                    (mutation,{loading,error,data})=>{
                        if(data){
                            alert(data)
                            window.location.href='/login'
                        }
                        if(error){
                            console.log(error)
                            errorMessage.onChange(`El formulario presenta problemas`)
                        }
                        return(
                            <LayoutPageRegister error={errorMessage.value}>
                                <RegisterForm loading={loading} onSubmit={mutation}/>
                            </LayoutPageRegister>
                        )
                    }
                }
            </RegisterFormContainer>
        </LayoutPage>
        

    )
}