import React,{ Fragment, useContext } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Context} from '../context'
const LOGIN=gql`  
mutation loginAdmin($email:String!,$password:String!){
  loginAdmin(email:$email,password:$password){
    token
    message
  }
}
`


export const LoginFormContainer = ({children})=>{
  const {IsSignIn,activateSignIn}=useContext(Context)
  const handleOnComplite =(data) =>{
    
    activateSignIn(data.loginAdmin.token)
  }
  return(
        <Mutation mutation={LOGIN} onCompleted={(data)=>handleOnComplite(data)}>
            {
              children
            }
        </Mutation>
    )
}