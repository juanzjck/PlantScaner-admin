import React from 'react'
import LayoutPage  from '../components/LayoutPage'
import { TrainingList } from '../components/TrainingList'
import { connect } from 'react-redux'
import { GetIterations } from '../containers/GetIterations'

const Trainings = props => {

    const handleDelete = id => {
        props.dispatch({ type: 'SHOW_MODAL_DELETE', payload: true })
    }

    return (
        <LayoutPage title="Entrenamientos">
            <GetIterations>
                {({ data, loading, error }) => {
                    return <TrainingList data={data?.getIterations} handleTryToDelete={handleDelete} />
                }}
            </GetIterations>
        </LayoutPage>
    );
}

export default connect()(Trainings)
