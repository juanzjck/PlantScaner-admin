import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_LOG = gql`
    query {
        getLogHistoric {
            user {
                firstName
                lastName
            }
            action
            createdAt
        }
    }
`

export const LogHistoric = ({ children, onError, onCompleted }) => {
    return (
        <Query
            query={GET_LOG} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            {children}
        </Query>
    )
}
