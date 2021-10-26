import React from 'react'
import { Note } from '../components/Note'
import { NoteEditContainer } from '../containers/NoteEditContainer'
import  LayoutPage  from '../components/LayoutPage'

export const NoteEdit= ({id}) =>{
    const handleSubmit=(onSubmit,input)=>{ 
        onSubmit({
            variables:{
                id,
                input
            }
        });
    }
   
    return(
        
            <NoteEditContainer id={id}>
                {
                    (mutation,{loading,error,data})=>{
                        if(data){
                        if(data.updateNote._id){
                            console.log(data)
                            window.location.href=`/note/${data.updateNote._id}`
                        }
                        }
                        if(error)console.log(error)
                        return(
                            <LayoutPage title={`Nota |}`}>
                                <Note onSubmit={(e)=>handleSubmit(mutation,e)}></Note>
                            </LayoutPage>
                            
                        )
                    }
                }
            </NoteEditContainer>
    )
}