import React, {createContext, useContext, useEffect, useState} from 'react';
import {getUserInfo} from "../utils/authService";

const authContex = createContext();
const {Provider} = authContex;
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    console.log(user)
    useEffect(() => {
        const fetchUserData = async () => {
            if (user === null){
                setLoading(true);
                const {data} = await getUserInfo();
                if (data?.success){
                    const currentUser = data.data;
                    setUser(currentUser)
                }else {
                    setUser(null);
                }
                setLoading(false);
            }
        };
        fetchUserData();
    },[user])

    return <Provider value={{user,setUser}}>{children}</Provider>
};

export const useAuthContex = () => useContext(authContex)

export default AuthProvider;