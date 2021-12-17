import React, { Fragment, useState } from 'react'
import { RiLeafLine, RiImage2Line, RiCheckboxCircleLine } from 'react-icons/ri'
import { 
    InputDevider, ButtonNavigate, Select, 
    Button, Input, Form, TextArea, InputFile 
} from '../../styles/inputs'
import { Element, Label, Icon, P } from './styles'
import { connect } from 'react-redux'
import Modal from '../Modal'
import { navigate } from "@reach/router"


const TrainForm = ({ plants, images, startTraining, dispatch, modalIsOpen, setModalIsOpen, handleStartTraining }) => {

    const handleClose = () => {
        setModalIsOpen(false)
        navigate('/trainings')
    }

    return (
        <Fragment>
            <Form onSubmit={e => handleStartTraining(e, startTraining)}>
                <InputDevider>
                    <Element>
                        <RiLeafLine size={80} />
                        <Label>{plants} plantas</Label> 
                    </Element>
                    <Element>
                        <RiImage2Line size={80} />
                        <Label>{images} imágenes</Label> 
                    </Element>
                </InputDevider>
                <InputDevider>
                    <ButtonNavigate to="/trainings" className="cancel">Cancelar</ButtonNavigate>
                    <Button className="primary" type="submit">Iniciar Entrenamiento</Button>
                </InputDevider>
            </Form>
            <Modal 
                title="Entrenamiento iniciado"
                modalIsOpen={true}
                dispatch={dispatch}
                handleClose={handleClose}
            >
                <Icon>
                    <RiCheckboxCircleLine size={150} />
                </Icon>
                <P>El entrenamiento ha iniciado, esto puede tardar varios minutos, vuelve luego para revisar el estado.</P>
            </Modal>
        </Fragment>
    )
}

export default connect()(TrainForm)
