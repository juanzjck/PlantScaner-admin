import React, { useEffect } from 'react'
import { Ul, Li, Wrapp } from './styles'
import { ButtonNavigate } from '../../styles/inputs'
import { TrainingCard } from '../TrainingCard'
import { Link } from '@reach/router'

export const TrainingList = ({ data, handleTryToDelete })=>{
    return (
        <Wrapp>
            <h1>Entrenamientos</h1>
            <ButtonNavigate to={`/train`}>
                Entrenar
            </ButtonNavigate>
            <Ul>
                {data?.map(training => {
                    return <Li key={training._id}>
                        <TrainingCard 
                            data={training}
                            handleTryToDelete={handleTryToDelete}
                        />
                    </Li>
                })}
            </Ul>
        </Wrapp>
    )
}