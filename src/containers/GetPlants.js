import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_PLANTS = gql`
    query getPlants {
        getPlants {
            _id
            name
            scientificName
            description
            user
        } 
    }
`

export const GetPlants = ({ children, onError, onCompleted }) => {
    return (
        <Query
            query={GET_PLANTS} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            {children}
        </Query>
    )
}