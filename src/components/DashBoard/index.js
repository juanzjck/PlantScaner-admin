import React, { useEffect } from 'react'
import { 
  WrappDashboard, WrapContainer, H2,
  Row, Col, Span, Table, Tr, Th, Sticky
} from './styles'
import { GetStats } from '../../containers/GetStats'
import { LogHistoric } from '../../containers/LogHistoric'
import { BsFillPersonFill } from 'react-icons/bs'
import { RiPlantFill } from 'react-icons/ri'
import { IoMdImages } from 'react-icons/io'
import { CgGym } from 'react-icons/cg'
import { AiFillEye } from 'react-icons/ai'
import { LogCard } from '../LogCard/'

export const Dashboard = () =>{
  return (
    <>
      <WrappDashboard>
        <WrapContainer>
          <GetStats>
            {({ data }) => {
              if (!data?.getStats) 
                return null
              
              return (
                <Row>
                  <Col>
                    <BsFillPersonFill size="50" />
                    <h2>{data.getStats.users}</h2>
                    <Span>Usuarios</Span>
                  </Col>
                  <Col>
                    <RiPlantFill size="50" />
                    <h2>{data.getStats.plats}</h2>
                    <Span>Plantas</Span>
                  </Col>
                  <Col>
                    <IoMdImages size="50" />
                    <h2>{data.getStats.images}</h2>
                    <Span>Imágenes</Span>
                  </Col>
                  <Col>
                    <CgGym size="50" />
                    <h2>{data.getStats.training}</h2>
                    <Span>Entrenamientos</Span>
                  </Col>
                  <Col>
                    <AiFillEye size="50" />
                    <h2>{data.getStats.recognition}</h2>
                    <Span>Reconocimientos</Span>
                  </Col>
                </Row>
              )
            }}
          </GetStats>
        </WrapContainer>
      </WrappDashboard>
      <WrappDashboard>
        <H2>LOG HISTORY</H2>
        <WrapContainer>
          <Table>
            <Sticky>
              <Tr>
                <Th><BsFillPersonFill size="20" style={{ marginRight: "1.5rem" }} />Usuario</Th>
                <Th>Acción</Th>
                <Th>Fecha</Th>
              </Tr>
            </Sticky>
            <tbody>
              <LogHistoric>
                {({ data, error }) => {
                  if (!data?.getLogHistoric)
                    return null

                  return data.getLogHistoric.map((log, i) => (
                    <Tr key={i}>
                      <LogCard data={log} />
                    </Tr>
                  ))
                }}
              </LogHistoric>
            </tbody>
          </Table>
        </WrapContainer>
      </WrappDashboard>
    </>
  )
}
