import LoadingOverlay from '@achmadk/react-loading-overlay';
import { useState, createContext } from 'react';
import { ClockLoader } from 'react-spinners';

export const LoadingContext = createContext(null);
const OverlayLoading = ({ children }) => {
    const [isLoaderActive, setLoaderActive] = useState(false);
    return (
        <LoadingContext.Provider value={setLoaderActive}>
            <LoadingOverlay
                active={isLoaderActive}
                spinner={<ClockLoader color='#b3c2c1' size={70}/>}
                text='loading..'
            >
                {children}
            </LoadingOverlay>
        </LoadingContext.Provider>
    )
}

export default OverlayLoading;