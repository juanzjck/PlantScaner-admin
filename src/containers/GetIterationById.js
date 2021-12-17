import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_ITERATION_BY_ID = gql`
    query ($id: ID!) {
        getIterationById(id: $id) {
            _id
            azure_id
            generation
            user {
                firstName
                lastName
            }
            startDate
            endDate
            status
            published
        }
    }
`

export const GetIterationById = ({ id, children, onError, onCompleted }) => {
    return (
        <Query
            query={GET_ITERATION_BY_ID} 
            onError={onError} 
            onCompleted={onCompleted}
            variables={{ id }}
            fetchPolicy="only-network"
        >
            {children}
        </Query>
    )
}
