import { useContext } from "react";

import { AuthContext } from "../../context/auth";

function LogoutButton(){
    const { logout } = useContext(AuthContext);

    function handleLogout(){
        console.log('logout')
        logout();
    }
    return(
        <button onClick={handleLogout}>Sair</button>
    )
}

export default LogoutButton;