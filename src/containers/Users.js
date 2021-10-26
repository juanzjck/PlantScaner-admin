import React,{ Fragment, useContext } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Context} from '../context'

const GET_USERS=gql`
query getUsers {
    getUsers {
      _id
      firstName
      email
      lastName
    }
}`

export const UserQuery = ({children, onError, onCompleted}) =>{

    return(
        <Query 
          query={GET_USERS} 
          onError={onError} 
          onCompleted={onCompleted}>
            {
              children
            }
        </Query>
    )
}