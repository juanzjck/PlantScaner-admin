import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const ADD_IMAGE_TO_PLANT = gql`
    mutation ($input: ImageInput!, $idPlant: ID) {
    	addImageToPlant(input: $input, idPlant: $idPlant) {
            _id
	    	name
            url
            wasUpload
        }
    }
`

export const AddImage = ({ children, onError, onCompleted }) =>{
    return (
        <Mutation 
            mutation={ADD_IMAGE_TO_PLANT} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            { children }
        </Mutation>
    )
}
