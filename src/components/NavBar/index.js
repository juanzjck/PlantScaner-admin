import React, { Fragment, useContext  } from 'react'
import {LinkButton,WrappDisclamer,WrappButtonOpenNav,WrappButtons,ItemNav,NavNote,ButtonOpenNav} from './styles'
import {useValue} from '../../hook/useValue'
import {Context} from '../../context'
import {BsFillHouseDoorFill,
    BsCloudFill,
    BsFillGrid3X3GapFill,
    BsCloudDownload,
    BsFillPlusSquareFill,
    BsFillFolderFill,
    BsClipboardData,
    BsFillDashCircleFill,
    BsFillPersonFill,
    BsFillXSquareFill,
    BsFlower3
} from 'react-icons/bs'
export const NavBar = () =>{
    const {logOut}=useContext(Context)
    const IsShow=useValue(false);
    const size=30;
    const handlerNewNote = () =>{
        title.setLocalStorage('')
        dedscription.setLocalStorage('')
        keyWords.setLocalStorage('')
        summary.setLocalStorage('')
        window.location.href='/newNote'
    }
    const handlerLogOut = () => {
        logOut();
    }
    return(
        <Fragment>
            {!IsShow.value?
                <ButtonOpenNav onClick={()=>IsShow.onChange(true)}>
                    <BsFillGrid3X3GapFill size={20}/>
                </ButtonOpenNav>:
                <Fragment>
                    <NavNote>
                        <WrappButtonOpenNav>
                            <ButtonOpenNav className='onShow' onClick={()=>IsShow.onChange(false)}>
                                <BsFillDashCircleFill size={20}/>
                            </ButtonOpenNav>
                        </WrappButtonOpenNav>
                 
                        <WrappButtons>
                            <LinkButton to='/'> 
                                <BsFillHouseDoorFill size={size}/>
                                   Home
                            </LinkButton>
                            <LinkButton to='/dashboard'> 
                                <BsClipboardData size={size}/>
                                   Dashboard
                            </LinkButton>
                            <LinkButton onClick={()=>console.log('click')} to='/users' >
                                <BsFillPersonFill size={size}/>
                                Usuarios
                            </LinkButton>
                            <LinkButton onClick={()=>console.log('click')} to='/plants' >
                                <BsFlower3 size={size}/>
                                Plantas
                            </LinkButton>
                        </WrappButtons>
                        <WrappButtons>
                            <LinkButton onClick={()=>handlerLogOut()}  to='/'> 
                                <BsFillXSquareFill size={size}/>
                                   Cerrar session
                            </LinkButton>
                        </WrappButtons>
               

                    </NavNote>
                 
                </Fragment>
             
                }
        
           
        </Fragment>
    )
}