import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const START_TRAINING = gql`
    mutation {
        startTraining
    }
`

export const StartTraining = ({ children, onError, onCompleted }) =>{
    return (
        <Mutation 
            mutation={START_TRAINING} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            {children}
        </Mutation>
    )
}
