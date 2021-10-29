import React, { Fragment } from 'react'
import {useValue} from '../../hook/useValue'
import {Label,InputDevider, ButtonNavigate, Select,Title, Button, Input,Form} from '../../styles/inputs'
export const UserForm = ({data,buttonText='Crear',backButton='Cancelar', title='Nuevo usuario',onSubmit}) => {
    const firstName = useValue(data?data.firstName : '');
    const lastName = useValue(data?data.lastName : '');
    const email = useValue(data? data.email : '');
    const password = useValue(data?data.password : '');
    const typeUser = useValue(data?data.typeUser : 'USER');
    const ocupation = useValue(data?data.ocupation : 'Other');


    const handleSubmit = (e) => {
      
        e.preventDefault();
        onSubmit({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            typeUser: typeUser.value,
            ocupation: ocupation.value
        })
    }
    return(
        <Fragment>
                
                <Form onSubmit={(e)=>handleSubmit(e)}>
                <Title >{title}</Title>
                    <InputDevider>
                        <Label>Nombre:</Label> 
                        <Input value={firstName.value} onChange={(e)=>firstName.onChange(e.target.value)} placeholder="Nombre" required/>
                        <Label>Apellidos:</Label> 
                        <Input value={lastName.value} onChange={(e)=>lastName.onChange(e.target.value)} placeholder="Apellidos" required/>
                    </InputDevider>
                    <InputDevider>
                        <Label>Correo:</Label> 
                        <Input type="email" value={email.value} onChange={(e)=>email.onChange(e.target.value)} placeholder="Correo" required/>
                        <Label>Contraseña:</Label> 
                        <Input  value={password.value} onChange={(e)=>password.onChange(e.target.value)} type="password" placeholder="Contraseña" required/>
                    </InputDevider>
                    <InputDevider>
                        <Label>Tipo de usuario:</Label> 
                        <Select  value={typeUser.value} onChange={(e)=>typeUser.onChange(e.target.value)} placeholder="Correo">
                            <option value="USER">Usuario sin permisos</option>
                            <option value="ADMIN">Admin</option>
                        </Select>
                
                        <Label>Ocupacion:</Label> 
                        <Select value={ocupation.value} onChange={(e)=>ocupation.onChange(e.target.value)} placeholder="Correo">
                            <option value="Other">Otros</option>
                            <option value="Student">Studiante</option>
                            <option value="Teacher">Profesor</option>
                            <option value="Profesional">Profecional</option>
                        </Select>
                    </InputDevider>
                   
                    <InputDevider>
                        <ButtonNavigate to="/users" className="cancel">{backButton}</ButtonNavigate>
                        <Button className="primary">{buttonText}</Button>
                       
                    </InputDevider>
                </Form>
        </Fragment>
      
    )
}