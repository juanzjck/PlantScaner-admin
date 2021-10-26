import React from 'react'
import { LayoutPageRegister } from '../components/LayoutPageRegister'
import { LoginForm } from '../components/LoginForm'
import {LoginFormContainer} from '../containers/LoginFormContainer'
import {useValue} from '../hook/useValue'
import  LayoutPage  from '../components/LayoutPage'
export const Login= () =>{
    const errorMessage=useValue('')
    return(
        <LayoutPage>
            <LoginFormContainer >
                {
                    (mutation,{loading,error,data})=>{
                        if(data){
                            window.location.href='/'
                        }
                        if(error){
                            errorMessage.onChange(`${error}`)
                        }
                        if(loading)return<h1>Cargando....</h1>
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