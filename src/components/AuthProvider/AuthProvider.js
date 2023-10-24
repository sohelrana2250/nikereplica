
import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const info = { displayName: 'Sohel Rana' };
    const [addProduct, setAddproduct] = useState([]);
    const authInfo = { info, setAddproduct, addProduct };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;