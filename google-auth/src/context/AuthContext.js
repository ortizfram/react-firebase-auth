import {useContext, createContext} from 'react';

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    return (
        <AuthContext.Provider values={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}