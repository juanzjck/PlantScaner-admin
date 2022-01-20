import React, { useEffect } from 'react';
import LayoutPage  from '../components/LayoutPage'
import Iteration from '../components/Iteration';
import { GetIterationById } from '../containers/GetIterationById'
import { PublishIteration } from '../containers/PublishIteration'

const Training = ({ id }) => {
    const onError = error => {
        console.log('error:', error);
    }

    const onCompleted = (data, refetch) => {
        console.log('data:', data);
        refetch()
    }

    return (
        <LayoutPage title="Entrenamiento">
            <GetIterationById id={id}>
                {({ data, loading, error, refetch }) => {
                    return (
                        <PublishIteration id={id} onError={onError} onCompleted={data => onCompleted(data, refetch)}>
                            {(publishIteration, { loading: publishLoading }) => {
                                return (
                                    <Iteration
                                        data={data?.getIterationById}
                                        publishIteration={publishIteration}
                                        loading={publishLoading}
                                        loadingRefetch={loading}
                                        refetch={refetch}
                                    />
                                )
                            }}
                        </PublishIteration>
                    )
                }}
            </GetIterationById>
        </LayoutPage>
    );
}

export default Training;
