import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const DELETE_IMAGE = gql`
    mutation ($id: ID, $idPlant: ID) {
        deleteImageFromPlant(id: $id, idPlant: $idPlant)
    }
`

export const DeleteImage = ({ children, onError, onCompleted }) =>{
    return (
        <Mutation 
            mutation={DELETE_IMAGE} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            { children }
        </Mutation>
    )
}
