import React, { createContext, useContext, useState } from 'react';

// Create the CaptainContext
export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = async (newCaptain) => {
        setCaptain(captainData)
    }

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    }
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;