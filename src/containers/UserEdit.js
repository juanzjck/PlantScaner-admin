import React,{ Fragment, useContext } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Context} from '../context'

const UPDATE_USER=gql`
mutation updateUser($id:ID!,$input:UserInput) {
    updateUser(id:$id,input:$input){
      _id
    }
  }`

export const UserEdit = ({children, onError, onCompleted}) =>{

    return(
        <Mutation mutation={UPDATE_USER} onError={onError} onCompleted={onCompleted}>
            {
              children
            }
        </Mutation>
    )
}