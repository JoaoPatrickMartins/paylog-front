import { useContext } from 'react'

import StoreContext from '../store/Context'
 
function ButtonLogout(){

    const { setToken } = useContext(StoreContext)

    function logout(){
        setToken(null)
    }

    return(
        <button onClick={logout}>
            Logout
        </button>
    )
}

export default ButtonLogout

