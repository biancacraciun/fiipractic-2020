import React from 'react';

import Loader from 'react-loader-spinner';
import '../../../styling/UI/spinner.scss';
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker({delay: 0});

    return (
        <div>
            { promiseInProgress &&
                <div className="spinner">
                    <Loader promiseTracker={usePromiseTracker} type="Bars" color="#BE3144" height={80} width={80} radius={50} timeout={3000}/>
                </div>
            }
        </div>
    )
}

export default LoadingIndicator;