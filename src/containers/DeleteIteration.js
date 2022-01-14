import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const DELETE_ITERATION = gql`
    mutation ($id: ID) {
        deleteIteration(id: $id)
    }
`

export const DeleteIteration = ({ children, onError, onCompleted }) =>{
    return (
        <Mutation 
            mutation={DELETE_ITERATION} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            { children }
        </Mutation>
    )
}
