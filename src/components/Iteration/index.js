import React from 'react'
import LayoutPage  from '../LayoutPage'
import { 
    BsFillPersonFill, BsCalendar3, BsArrowCounterclockwise,
    BsCheckCircle, BsCloudCheck, BsClock, BsBullseye
} from 'react-icons/bs'
import { Row, Col, Recharge } from './styles'
import { 
    Label, InputDevider, ButtonNavigate, Select, 
    Title, Button, Input, Form, TextArea, InputFile 
} from '../../styles/inputs'

const Iteration = ({ data, publishIteration, loading, refetch, loadingRefetch }) => {

    if (!data && !data?.getIterationById) return <p>Cargando</p>

    const Status = () => {
        if (data?.status === 'Training') {
            return (
                <Col>
                    <BsClock size={50} />
                    <Label>{data.status}</Label>
                </Col>
            )
        } else if (data?.published) {
            return (
                <Col>
                    <BsCloudCheck size={50} />
                    <Label>Publicado</Label>
                </Col>
            )
        } else if (data?.status === 'Completed') {
            return (
                <Col>
                    <BsCheckCircle size={50} />
                    <Label>{data.status}</Label>
                </Col>
            )
        }
    }

    const PublicationStatus = () => {
        console.log('Data ID:', data?._id);
        if (loading)
            return <Button className="primary">
                Publicando...
            </Button>

        if (!data?.published)
            return <Button 
                className="primary"
                onClick={() => publishIteration({ variables: { id: data._id } })}
            >
                Publicar
            </Button>

        return null
    }

    return (
        <LayoutPage title="iteración">
            <Form>
                <Title>{data.generation}</Title>
                <Recharge onClick={() => refetch()}>
                    {loadingRefetch ? 
                        <BsBullseye size={30} /> : 
                        <BsArrowCounterclockwise size={30} />
                    }
                </Recharge>
                <Row>
                    <Col>
                        <BsFillPersonFill size={50} />
                        <Label>{data.user.firstName} {data.user.lastName}</Label>
                    </Col>
                    <Col>
                        <BsCalendar3 size={50} />
                        <Label>Inicio: {data.startDate}</Label>
                    </Col>
                    <Col>
                        <BsCalendar3 size={50} />
                        <Label>Fin: {data.endDate}</Label>
                    </Col>
                    <Status />
                </Row>
                <InputDevider>
                    <ButtonNavigate to="/trainings" className="cancel">Volver</ButtonNavigate>
                    <PublicationStatus />
                </InputDevider>
            </Form>
        </LayoutPage>
    );
}

export default Iteration
