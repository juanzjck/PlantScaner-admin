import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const CREAT_PLANT = gql`
    mutation ($input: PlantInput!){
        createPlant(input:$input) {
            _id
            name
        }
    }
`

export const CreatePlant = ({ children, onError, onCompleted }) =>{
    return (
        <Mutation 
            mutation={CREAT_PLANT} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            {children}
        </Mutation>
    )
}
