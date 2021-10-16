import  {useState} from 'react'
export function useLocalStorage(key,initialValue){
    const [storeValue,setstoreValue]=useState(()=>{
        try {
          const item= window.localStorage.getItem(key)
          return item !=null ? JSON.parse(item):initialValue
        } catch (error) {
            return false
        }
    });

    const setLocalStorage = v =>{
        try {  
            console.log(v)
            window.localStorage.setItem(key,JSON.stringify(v))
            setstoreValue(v)
        } catch (error) {
            console.error(error)
        }
    }
    return {storeValue,setLocalStorage}
}