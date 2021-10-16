import React,{ Fragment, useEffect } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
const GET_NOTES=gql`  
{
    getNotes{
        _id
        title
        summary
        keyword
        createdAt
        updatedAt
    }
}
`


export const ListNoteContainer = ({children}) =>{

    return(
        <Query partialRefetch notifyOnNetworkStatusChange={true}  query={GET_NOTES} partialRefetch={true} fetchPolicy="no-cache" >
            {
                children
            }
        </Query>
    )
}