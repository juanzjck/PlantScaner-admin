import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_PLANT = gql`
    query ($id: ID!){
        getPlantById(id:$id) {
            name
            scientificName
            description
        }
    }
`

export const GetPlant = ({ id, children, onError, onCompleted }) =>{
    return (
        <Query 
            fetchPolicy="cache-and-network"
            query={GET_PLANT} 
            onError={onError} 
            onCompleted={onCompleted}
            variables={{ id }}
        >
            { children }
        </Query>
    )
}
