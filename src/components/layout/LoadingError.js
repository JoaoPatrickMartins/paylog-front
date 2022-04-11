import { Link } from "react-router-dom";

import styles from "./LoadingError.module.css"

function LoadingError(){
    return(
        <div className={styles.LoadingError}>
            <p>Erro ao carregar os dados das solicitações.</p>
            <Link to='/login'>Voltar.</Link>
        </div>
        
    )
}

export default LoadingError; 