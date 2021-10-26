import React from 'react'
import { Note } from '../components/Note'
import { NewNoteContainer } from '../containers/NewNoteContainer'
import  LayoutPage  from '../components/LayoutPage'

export const NewNote= () =>{
    const handleSubmit=(onSubmit,input)=>{ 
        onSubmit({
            variables:{
                input
            }
        });
    }
    return(
        <LayoutPage>
            <NewNoteContainer>
                {
                    (mutation,{loading,error,data})=>{
                        if(data){
                            if(data.createNote._id){
                                window.location.href=`/note/${data.createNote._id}`
                            }
                        }
                        return(
                            <Note onSubmit={(e)=>handleSubmit(mutation,e)}></Note>
                        )
                    }
                }
            </NewNoteContainer>
        </LayoutPage>
    )
}