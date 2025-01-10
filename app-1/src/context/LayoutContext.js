import { createContext, useState } from 'react';

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    
    return (
        <LayoutContext.Provider value={{ isVisible, setIsVisible }}>
            {children}
        </LayoutContext.Provider>
    );
};
