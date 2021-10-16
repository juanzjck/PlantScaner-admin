import React,{ Fragment, useContext } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Context} from '../context'

const CREAT_NOTE=gql`
mutation createNote($input:NoteInput!){
    createNote(input:$input){
     _id
    }
}`

export const NewNoteContainer = ({children}) =>{

    return(
        <Mutation mutation={CREAT_NOTE}>
            {
              children
            }
        </Mutation>
    )
}