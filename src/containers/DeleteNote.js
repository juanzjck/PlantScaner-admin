import React,{ Fragment, useContext } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
const DELETE_NOTE=gql`  
mutation deleteNote($id:ID!){
    deleteNote(id:$id)
}
`

export const DeleteNote = ({children}) =>{

    return(
        <Mutation mutation={DELETE_NOTE}>
            {
              children
            }
        </Mutation>
    )
}