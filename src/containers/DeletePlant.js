import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const DELETE_PLANT = gql`  
    mutation ($id: ID!){
        deletePlant(id: $id) {
            name
        }
    }
`

export const DeletePlant = ({ onError, children, onCompleted }) =>{
    return (
        <Mutation 
            onError={onError} 
            onCompleted={onCompleted} 
            mutation={DELETE_PLANT}
        >
            {children}
        </Mutation>
    )
}
