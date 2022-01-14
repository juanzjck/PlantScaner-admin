import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_STATS = gql`
    query {
        getStats {
            users
            plats
            recognition
            training
            images
        }
    }
`

export const GetStats = ({ children, onError, onCompleted }) => {
    return (
        <Query
            query={GET_STATS} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            {children}
        </Query>
    )
}
