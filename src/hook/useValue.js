import {useState} from 'react'

export const useValue = initialValue =>{
    const [value,setValue]=useState(initialValue)
    const onChange= e =>{
        if(typeof e === 'object'){
            setValue(e.target.value)
        }else{
            setValue(e)
        }
    }
    return {value,onChange}
}