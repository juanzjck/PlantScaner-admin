import React, { Fragment } from 'react'
import { useValue } from '../../hook/useValue'
import { Label, InputDevider, ButtonNavigate, Select, Title, Button, Input, Form } from '../../styles/inputs'

export const PlantForm = ({ data, buttonText = 'Crear', backButton = 'Cancelar', title = 'Nueva Planta', onSubmit }) => {
    const name = useValue(data ? data.name : '')
    const scientificName = useValue(data ? data.scientificName : '')
    const description = useValue(data ? data.description : '')

    const handleSubmit = e => {
        e.preventDefault()

        onSubmit({
            name: name.value,
            scientificName: scientificName.value,
            description: description.value,
        })
    }

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <InputDevider>
                    <Label>Nombre:</Label> 
                    <Input value={name.value} onChange={e => name.onChange(e.target.value)} placeholder="Nombre" required/>
                    <Label>Nombre Cientifico:</Label> 
                    <Input value={scientificName.value} onChange={e => scientificName.onChange(e.target.value)} placeholder="Nombre Cientifico" required />
                </InputDevider>
                <InputDevider>
                    <Label>Descripción:</Label> 
                    <Input type="text" value={description.value} onChange={e => description.onChange(e.target.value)} placeholder="Description" required />
                </InputDevider>
                <InputDevider>
                    <ButtonNavigate to="/plants" className="cancel">{backButton}</ButtonNavigate>
                    <Button className="primary">{buttonText}</Button>
                </InputDevider>
            </Form>
        </Fragment>
    )
}
