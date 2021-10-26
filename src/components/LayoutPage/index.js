import React, { Fragment,useContext } from 'react'
import { Loading } from '../Loading'
import {Helmet} from "react-helmet";
import { NavBar } from '../NavBar';
import {Context} from '../../context';
import {connect} from 'react-redux'
import { Messagge } from './styles';
 const LayoutPage = ({children,ui,title,description}) =>{
    const {IsSignIn}=useContext(Context);
    return(
        <Fragment>
           <Helmet>
                <meta charSet="utf-8" />
                <title>{title?title:'Plant Scanner ADMIN'}</title>
                <meta name="description" content={`${description?description:'ADMIN'}`} />
            </Helmet>
        <Loading/>
            {IsSignIn&&<NavBar></NavBar>}
            {ui.error!==''&&<Messagge className="red">{ui.error}sd</Messagge>}
            {ui.success!==''&&<Messagge className="green">{ui.success}</Messagge>}
            
          {children}
        </Fragment>
    )

 }

 function mapStateToProps(state){
    return {
        ui:state.ui   
    }
 }
export default connect(mapStateToProps)(LayoutPage)