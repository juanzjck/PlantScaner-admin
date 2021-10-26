import React,{ Fragment, useContext } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
const DELETE_NOTE=gql`  
mutation deleteUser($id:ID!){
    deleteUser(id:$id) {
    _id
  }
}
`

export const DeleteUser = ({onError,children, onCompleted}) =>{

    return(
        <Mutation onError={onError} onCompleted={onCompleted} mutation={DELETE_NOTE}>
            {
              children
            }
        </Mutation>
    )
}