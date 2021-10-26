import React,{ Fragment, useContext } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Context} from '../context'

const CREAT_USER=gql`
mutation createUser($input: UserInput!) {
    createUser(input: $input) 
}`

export const NewNoteContainer = ({children, onError, onCompleted}) =>{

    return(
        <Mutation mutation={CREAT_USER} onError={onError} onCompleted={onCompleted}>
            {
              children
            }
        </Mutation>
    )
}