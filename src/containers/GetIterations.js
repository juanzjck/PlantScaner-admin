import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_ITERATIONS = gql`
    query {
        getIterations {
            _id
            generation
            azure_id
            startDate
            endDate
            status
            published
        }
    }
`

export const GetIterations = ({ children, onError, onCompleted }) => {
    return (
        <Query
            query={GET_ITERATIONS} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            {children}
        </Query>
    )
}
