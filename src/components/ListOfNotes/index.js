import React, { Fragment } from 'react'
import {Ul,Li,Wrapp} from './styles'
import {CardNote} from '../CardNote'
export const ListOfNotes= ({data,handleTryToDelete})=>{
    return(
        <Wrapp>
            <h1>Mis notas</h1>
            <Ul>
                {
                    data.map(c=><Li key={c._id}><CardNote handleTryToDelete={handleTryToDelete} {...c}/></Li>)
                }
            </Ul>
        </Wrapp>

    )
}