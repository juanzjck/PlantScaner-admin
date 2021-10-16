import React, { Fragment } from  'react'
import {Form,Button, Input, Title,WrappButtonReturn} from './styles'
import {BsFillCaretLeftFill} from 'react-icons/bs'
import { Link } from '@reach/router'
import {useValue} from '../../hook/useValue'
export const LoginForm = ({mutation}) =>{
    const email=useValue('')
    const password=useValue('')
    const handleDisable = () =>{

        return  email.value!='' && password.value!='' 
    }
    const handleSubmito =  (e) =>{
        e.preventDefault();
        try {
            mutation({variables:{email:`${email.value}`,password:`${password.value}`}})
         
        } catch (error) {
            console.log(error)
        }
      
    }
    return(
    <Fragment>
        <WrappButtonReturn>
            <Link to='/'>
                 <BsFillCaretLeftFill size={40}/>
            </Link>
           
        </WrappButtonReturn>
        <Title>Iniciar sesión</Title>
        <Form onSubmit={(e)=>{handleSubmito(e)}}>
    
            <Input type="email" onChange={(value)=>email.onChange(value)} placeholder='Correo'/>
            <Input type="password" onChange={(value)=>password.onChange(value)} placeholder='Contraseña'/>
            <Button type="submit" disabled={!handleDisable()}>Iniciar sesión</Button>
        </Form>
    </Fragment>

    )
}