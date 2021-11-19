import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_IMAGES = gql`
    query ($id:ID!){
        getImageByPlantId(id:$id){
            _id
            name
            wasUpload
            url
        }
    }
`

export const GetImages = ({ id, children, onError, onCompleted }) => {
    return (
        <Query
            query={GET_IMAGES} 
            onError={onError} 
            onCompleted={onCompleted}
            variables={{ id }}
        >
            {children}
        </Query>
    )
}
