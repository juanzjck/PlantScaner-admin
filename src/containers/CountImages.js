import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const COUNT_IMAGES = gql`
    query {
        countImages
    }
`

export const CountImages = ({ children, onError, onCompleted }) => {
    return (
        <Query
            query={COUNT_IMAGES} 
            onError={onError} 
            onCompleted={onCompleted}
        >
            {children}
        </Query>
    )
}
