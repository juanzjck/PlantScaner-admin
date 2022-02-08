import React, { useEffect } from 'react'
import { Ul, Li, Wrapp } from './styles'
import { ButtonNavigate } from '../../styles/inputs'
import { TrainingCard } from '../TrainingCard'
import { Link } from '@reach/router'


export const TrainingList = ({ data, deleteIteration, loading, refetch })=>{
    
    // const handleDelete = id => deleteIteration({ variables: { id } })
    
    useEffect(() => {
        refetch()
    }, [data])

    useEffect(() => {
        refetch()
    }, [])


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
                            // handleTryToDelete={handleDelete}
                            deleteIteration={deleteIteration}
                            loading={loading}

                        />
                    </Li>
                })}
            </Ul>
        </Wrapp>
    )
}