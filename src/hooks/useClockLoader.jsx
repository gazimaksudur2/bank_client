import React, { useContext } from 'react';
import { LoadingContext } from '../layouts/OverlayLoading/OverlayLoading';

const useClockLoader = () => {
    return useContext(LoadingContext);
};

export default useClockLoader;