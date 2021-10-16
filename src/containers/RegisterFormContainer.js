import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const SIGN_UP=gql`  
mutation createUser($input:UserInput!){
    createUser(input:$input)
  }
`
export const RegisterFormContainer = ({children})=>{
    
    return(
        <Mutation mutation={SIGN_UP} >
            {
                children
            }
               
        </Mutation>
    )
}