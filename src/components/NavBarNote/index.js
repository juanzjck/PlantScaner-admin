import React, { Fragment } from 'react'
import {LinkButton,WrappDisclamer,WrappButtonOpenNav,WrappButtons,ItemNav,NavNote,ButtonOpenNav} from './styles'
import {useValue} from '../../hook/useValue'
import {useLocalStorage} from '../../hook/useLocalStorage'
import {BsFillHouseDoorFill,BsCloudFill,BsFillGrid3X3GapFill,BsCloudDownload,BsFillPlusSquareFill,BsFillFolderFill,BsFillDashCircleFill} from 'react-icons/bs'
export const NavBarNote = ({onSubmit}) =>{
    const title=useLocalStorage('title','')
    const keyWords=useLocalStorage('keyword','')
    const dedscription=useLocalStorage('description','')
    const summary=useLocalStorage('summary','')
    const IsShow=useValue(false);
    const size=30;
    const handlerNewNote = () =>{
        title.setLocalStorage('')
        dedscription.setLocalStorage('')
        keyWords.setLocalStorage('')
        summary.setLocalStorage('')
        window.location.href='/newNote'
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
                            <LinkButton onClick={()=>handlerNewNote()} to='/newNote'> 
                                <BsFillPlusSquareFill size={size}/>
                                Nueva nota
                            </LinkButton>
                            <ItemNav onClick={(e)=>onSubmit(e)} >
                                <BsFillFolderFill size={size}/>
                                Guardar cambios
                            </ItemNav>
                         
                        </WrappButtons>
                        <WrappButtons>
                                 <LinkButton to='/'> 
                                    <BsCloudDownload size={size}/>
                                    Descargar nota
                                </LinkButton>
                                <LinkButton  to='/notes' >
                                    <BsCloudFill size={size}/>
                                    Capetas de notas
                                </LinkButton>
                        </WrappButtons>
                        <WrappButtons>
                               <LinkButton to='/'> 
                                    <BsFillHouseDoorFill size={size}/>
                                   Home
                                </LinkButton>
                        </WrappButtons>

                    </NavNote>
                 
                </Fragment>
             
                }
        
           
        </Fragment>
    )
}