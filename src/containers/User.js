import React,{ Fragment, useContext } from 'react'
import { Mutation,Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Context} from '../context'
import {useLocalStorage} from '../hook/useLocalStorage'
const UPDATE_NOTE=gql`
mutation updateNote($id:ID!,$input:NoteInput){
    updateNote(id:$id,input:$input){
        _id,
        title,
        description,
        keyword,
        summary
    }
  }`

const GET_USER=gql`
query getUser($id:ID!) {
    getUserById(id:$id) {
      _id
      firstName
      lastName
      typeUser
      email
      password
      ocupation
    }
  }
`

export const User = ({children,id})=>{
    const title=useLocalStorage('title','')
    const keyWords=useLocalStorage('keyword','')
    const dedscription=useLocalStorage('description','')
    const summary=useLocalStorage('summary','')
    return(
        <Query query={GET_USER} fetchPolicy="no-cache" variables={{id}}>
            {
                children
            }
        </Query>
    )
}