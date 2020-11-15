import React from 'react';
import {useAuthContex} from "../contex/authProvider";
import {logout} from "../utils/authService";


function Header(){
    const {isLoggedIn,setUser} = useAuthContex();
    const handleLogout = async() => {
        await logout();
        setUser(null);
    }
    return(
        <div>
            {!isLoggedIn &&(
                <button><a href="/login">Login with Email</a></button>
            )}
            {isLoggedIn &&(
                <button onClick={handleLogout}><a href="/">Logout</a></button>
            )}
        </div>
    )
}

export default Header;
