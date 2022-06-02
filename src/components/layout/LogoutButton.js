import { useContext } from "react";

import { AuthContext } from "../../context/auth";

function LogoutButton({className, setMenuIsVisible}){
    const { logout } = useContext(AuthContext);

    function handleLogout(){
        setMenuIsVisible(false);
        logout();
    }
    return(
        <button className={className} onClick={handleLogout}>Sair</button>
    )
}

export default LogoutButton;