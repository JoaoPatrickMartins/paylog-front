import React, { useContext } from "react"
import { Navigate } from 'react-router-dom'
import StoreContext from "../../store/Context"

const RoutesPrivate = ({ element }) => {
    const { token } = useContext(StoreContext)
   
    if(token === null ){
        return(
            <Navigate to='/login' />
        )
    }

    return element;
}

export default RoutesPrivate