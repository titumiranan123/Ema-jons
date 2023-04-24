import React, { createContext } from 'react';
export const Authcontex = createContext(null);
const Authprovider = ({ children }) => {
    const authinfo = {};
    return (
        <Authcontex.Provider value={authinfo}>
            {children}
        </Authcontex.Provider>
    );
};

export default Authprovider;