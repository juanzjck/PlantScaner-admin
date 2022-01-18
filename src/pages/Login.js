import React, { useEffect } from 'react'
import { LayoutPageRegister } from '../components/LayoutPageRegister'
import { LoginForm } from '../components/LoginForm'
import {LoginFormContainer} from '../containers/LoginFormContainer'
import {useValue} from '../hook/useValue'
import  LayoutPage  from '../components/LayoutPage'
export const Login= (props) =>{
    const errorMessage=useValue('')

    useEffect(() => {
        props.dispatch({ type: 'CLEAN_MESSAGES' }) 
    }, [])

    return(
        <LayoutPage>
            <LoginFormContainer>
                {
                    (mutation,{loading,error,data})=>{
                        if(data){
                            window.location.href='/'
                        }
                        if(error){
                            const errorMsg = error.graphQLErrors[0].message

                            if (errorMsg === 'No correct password')
                                errorMessage.onChange("Contraseña incorrecta. Intenta de nuevo.")
                            else if (errorMsg.includes("Cannot read property"))
                                errorMessage.onChange("Correo incorrecto. Intenta de nuevo.")
                            else
                                errorMessage.onChange(errorMsg)
                        }
                        return ( 
                        <LayoutPageRegister error={errorMessage.value}>
                                <LoginForm  loading={loading} mutation={mutation}/>
                        </LayoutPageRegister>
                        )
                    }
                }

            </LoginFormContainer>
        </LayoutPage>
    )
}