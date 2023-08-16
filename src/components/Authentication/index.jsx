import React, { createContext, useContext, useState } from 'react'


const ContextAuthentication = createContext();


const Authentication = ({ children }) => {
    const [state, setState] = useState(false);

    return (
        <ContextAuthentication.Provider>
            {children}
        </ContextAuthentication.Provider>
    )
}


export default Authentication