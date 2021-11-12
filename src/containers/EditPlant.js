import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const UPDATE_PLANT = gql`
    mutation ($id: ID!, $input: PlantInput!){
        updatePlant(id: $id, input: $input) {
            _id
        }
    }
`

export const EditPlant = ({ children, onError, onCompleted }) =>{
    return (
        <Mutation 
            mutation={UPDATE_PLANT} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            { children }
        </Mutation>
    )
}
