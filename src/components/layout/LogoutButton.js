import { useContext } from "react";

import { AuthContext } from "../../context/auth";

function LogoutButton({className}){
    const { logout } = useContext(AuthContext);

    function handleLogout(){
        logout();
    }
    return(
        <button className={className} onClick={handleLogout}>Sair</button>
    )
}

export default LogoutButton;