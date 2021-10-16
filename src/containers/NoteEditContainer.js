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

const GET_NOTE=gql`
query getNoteInfo($id:ID!){
    getNoteInfo(id:$id){
      title,
      description,
      keyword,
      summary
    }
  }
`

export const NoteEditContainer = ({children,id})=>{
    const title=useLocalStorage('title','')
    const keyWords=useLocalStorage('keyword','')
    const dedscription=useLocalStorage('description','')
    const summary=useLocalStorage('summary','')
    return(
        <Query query={GET_NOTE} fetchPolicy="no-cache" variables={{id}}>
            {
                ({loading,error,data})=>{
                    if(loading)return<h2>Loading...</h2>
                    if(error)console.log(error)
                    if(data){
                        console.log(data)
                        title.setLocalStorage(data.getNoteInfo.title)
                        dedscription.setLocalStorage(data.getNoteInfo.description)
                        keyWords.setLocalStorage(data.getNoteInfo.keyword)
                        summary.setLocalStorage(data.getNoteInfo.summary)
                    
                    }
                    return(
                        <Mutation mutation={UPDATE_NOTE}>
                            {
                                children
                            }
                        </Mutation>
                    )
                }
            }
        </Query>
    )
}