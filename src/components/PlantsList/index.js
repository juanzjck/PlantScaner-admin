import React, { useEffect } from 'react'
import { Ul, Li, Wrapp } from './styles'
import { ButtonNavigate } from '../../styles/inputs'
import { PlantCard } from '../PlantCard'
import { Link } from '@reach/router'
import { BsPlusCircleFill } from 'react-icons/bs'

export const PlantsList = ({ data, handleTryToDelete, refetch })=>{

    useEffect(() => {
        refetch()
    }, [])

    return (
        <Wrapp>
            <h1>Plantas</h1>
            <ButtonNavigate to={`/plants/new`}>
                Nueva Planta
                <BsPlusCircleFill color="white"/>
            </ButtonNavigate>
            <Ul>
                {data.map(plant => {
                    return <Li key={plant._id}>
                        <PlantCard 
                            data={plant}
                            handleTryToDelete={handleTryToDelete}
                            refetch={refetch}
                        />
                    </Li>
                })}
            </Ul>
        </Wrapp>
    )
}