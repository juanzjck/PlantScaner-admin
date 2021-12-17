import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const PUBLISH_ITERATION = gql`
    mutation ($id: ID) {
        publishIteration(id: $id)
    }
`

export const PublishIteration = ({ children, onError, onCompleted }) => {
    return (
        <Mutation
            mutation={PUBLISH_ITERATION} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            {children}
        </Mutation>
    )
}