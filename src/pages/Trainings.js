import React from 'react'
import LayoutPage  from '../components/LayoutPage'
import { TrainingList } from '../components/TrainingList'
import { connect } from 'react-redux'
import { GetIterations } from '../containers/GetIterations'

import { DeleteIteration } from '../containers/DeleteIteration'

const Trainings = props => {
    return (
        <LayoutPage title="Entrenamientos">
            <GetIterations>
                {({ data, refetch }) => {
                    return (
                        <DeleteIteration onCompleted={() => refetch()}>
                            {(deleteIteration, { loading }) => {
                                return (
                                    <TrainingList
                                        data={data?.getIterations}
                                        deleteIteration={deleteIteration}
                                        loading={loading}
                                        refetch={refetch}
                                    />
                                )
                            }}
                        </DeleteIteration>
                    )

                }}
            </GetIterations>
        </LayoutPage>
    );
}

export default connect()(Trainings)
