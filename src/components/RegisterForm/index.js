import React, { Fragment } from  'react'
import {Form,Button, Input, Title,WrappButtonReturn} from './styles'
import {BsFillCaretLeftFill} from 'react-icons/bs'
import { Link } from '@reach/router';
import {useValue} from '../../hook/useValue'
import {RegisterFormContainer} from '../../containers/RegisterFormContainer'

export const RegisterForm = ({onSubmit,loading}) =>{
   const first_name=useValue('')
   const last_name=useValue('')
   const email=useValue('')
   const password=useValue('')
   const password_repeat=useValue('')
   const handleDisable = () =>{
      
       return (first_name.value!='' && last_name.value!='' && email.value!='' && password.value!='' && password_repeat.value!='' && password.value==password_repeat.value)
   }
   const handleSubmit = (e) =>{
    e.preventDefault();
    const input= {
        first_name:first_name.value,
        last_name:last_name.value,
        password:password.value,
        email:email.value,
        country: "ec",
    }
    console.log(input)
    onSubmit({variables:{input}})
   }
    return(
    <Fragment>
        <WrappButtonReturn>
            <Link to='/'>
              <BsFillCaretLeftFill size={40}/>
            </Link>
           
        </WrappButtonReturn>
        <Title>Registrate</Title>

        <Form onSubmit={(e)=>handleSubmit(e)}>
            <Input onChange={(value)=>first_name.onChange(value)} placeholder='Primer nombre'/>
            <Input onChange={(value)=>last_name.onChange(value)} placeholder='Segundo nombre'/>
            <Input onChange={(value)=>email.onChange(value)} type="email" placeholder='Correo'/>
            <Input onChange={(value)=>password.onChange(value)} type="password" placeholder='Contraseña'/>
            <Input onChange={(value)=>password_repeat.onChange(value)} type="password" placeholder='Repetir contraseña'/>
            <Button disabled={loading?loading:!handleDisable()} >Registrarse</Button>
        </Form>
    
            
    </Fragment>

    )
}