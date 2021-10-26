import React, {Fragment, useContext} from 'react'
import {P,Img ,Title,WrappSectionContent,WrappIcones,LandingHeader,IconImg,WrappSection,Banner,Button,WrappButtons} from './styles'
import logo from '../../assets/logo.png'
import btcIcon from '../../assets/btc.png'
import paypalIcon from '../../assets/paypal.png'
import {Context} from '../../context'
import { BsCheckCircle } from "react-icons/bs";
export const Landing= () =>{
    const {IsSignIn}=useContext(Context)
    return(
        <LandingHeader>
            <Banner>
                <Img src={logo}/>
                <WrappButtons>
                    {IsSignIn?
                    <Fragment>
                        <Button to='/dashboard' >Ir Dashboard</Button>
                    </Fragment>
                    :
                    <Fragment>
                        <Button  to='/login' >Inicia sesión</Button>
                    </Fragment>
                    }
                   
                </WrappButtons>
            </Banner>
            <WrappSection>
                <span>Todos los derechos reservados por ®Plant Scanner </span>
            </WrappSection>
        </LandingHeader>
    )
}
