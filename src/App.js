import React, { Fragment,useContext } from 'react'
import { NewNote } from './pages/NewNote'
import { GlobalStyle } from './styles/GlobalStyles'
import {Home} from './pages/Home'
import Notes from './pages/Notes'
import {Redirect, Router} from '@reach/router'

import {Context} from './context'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import { NoteEdit} from './pages/Note'

export const App = () =>{
    const {IsSignIn}=useContext(Context)
    return(
        <Fragment>
            <GlobalStyle/>
       
           
                <Router>
                    <Home default path="/"/>
                    {!IsSignIn&&<Login path="/login"/>}
                 
                    
                    {!IsSignIn&&<Redirect from="/notes" to="/"/>}
                    {IsSignIn&&<Redirect from='/login' to='/'/>}
                    {IsSignIn&&<Redirect from='/register' to='/'/>}
                    {IsSignIn&&<NoteEdit path='/note/:id'/>}
                    <NewNote path="/newNote" />
                    <Notes path="/notes"/>
                </Router>
        </Fragment>   
    )
}