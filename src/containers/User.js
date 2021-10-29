import React,{ Fragment, useContext } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Context} from '../context'

const GET_USERS=gql`
query {
  getUser {
      _id
      firstName
      lastName
      ocupation
      email
      password
      typeUser
  }
}`

export const User = ({children, onError, onCompleted}) =>{

    return(
        <Query 
          fetchPolicy="network-only"
          query={GET_USERS} 
          onError={onError} 
          onCompleted={onCompleted}>
            {
              children
            }
        </Query>
    )
}