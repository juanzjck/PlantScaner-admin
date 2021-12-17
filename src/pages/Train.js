import React, { useState, useEffect } from 'react'
import TrainForm from '../components/TrainForm'
import LayoutPage  from '../components/LayoutPage'
import { CountImages } from '../containers/CountImages'
import { StartTraining } from '../containers/StartTraining'
import { Loading } from '../components/Loading'
import { connect } from 'react-redux'

const Train = ({ dispatch }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        dispatch({ type:'CLEAN_MESSAGES' }) 
    }, [])

    const onError = data => {
        dispatch({
            type:'SET_SUCCESS',
            payload: data.graphQLErrors[0].message
        })
    }

    const handleStartTraining = (e, startTraining) => {
        e.preventDefault()
        startTraining()
    }

    return (
        <LayoutPage title='Entrenar'>
            <CountImages>
                {({ data }) => {
                    return (
                        <StartTraining onError={onError} onCompleted={() => setModalIsOpen(true)}>
                            {(startTraining, { loading }) => {
                                return (
                                    <TrainForm
                                        plants='20'
                                        images={data?.countImages} 
                                        startTraining={startTraining}
                                        handleStartTraining={handleStartTraining}
                                        modalIsOpen={modalIsOpen}
                                        setModalIsOpen={setModalIsOpen}
                                    />
                                )
                            }}
                        </StartTraining>
                    )
                }}
            </CountImages>
        </LayoutPage> 
    )
}

export default connect()(Train)
