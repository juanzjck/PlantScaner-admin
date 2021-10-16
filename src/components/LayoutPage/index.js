import React, { Fragment } from 'react'
import { Loading } from '../Loading'
import {Helmet} from "react-helmet";
export const LayoutPage = ({children,title,description}) =>{
    return(
        <Fragment>
           <Helmet>
                <meta charSet="utf-8" />
                <title>{title?title:'Plant Scanner ADMIN'}</title>
                <meta name="description" content={`${description?description:'ADMIN'}`} />
            </Helmet>
        <Loading/>
          {children}
        </Fragment>
    )
}