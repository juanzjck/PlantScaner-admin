import React,{ Fragment, useContext } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Context} from '../context'

const GET_USERS=gql`
query($id: ID!) {
  getUserById(id: $id) {
      _id
      firstName
      lastName
      ocupation
      email
      password
      typeUser
  }
}`

export const User = ({ id, children, onError, onCompleted }) =>{

    return(
        <Query 
          fetchPolicy="network-only"
          query={GET_USERS} 
          onError={onError} 
          onCompleted={onCompleted}
          variables={{ id }}
        >
            {
              children
            }
        </Query>
    )
}