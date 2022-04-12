import styles from './RequestCard.module.css'

import { Link } from 'react-router-dom'

import { BsReceipt, BsFillTrashFill } from 'react-icons/bs'

import { destroyRequest } from '../../services/api'

import { useContext } from 'react'

import { AuthContext } from '../../context/auth'



function RequestCard( { request, loadRequests, msg } ) {
    const { user } = useContext(AuthContext);

    const remove = async (e) => {
        //e.preventDefault();
        await destroyRequest(user?.id, request._id);
        await loadRequests();
        console.log('delete request');
        msg('Solicitação excluida com sucesso!');

    }

    return(
       <div className={styles.request_card}>
           <h4>{request.title}</h4>
           <p>
               <span>Valor:</span> {request.value}
           </p>
           <p>
               <span>Solicitante:</span> {request.requester_name}
           </p>
           <p>
               <span>Data de vencimento:</span> {request.due_date.split("-").reverse().join("/")}
           </p>
           <p className={styles.status_text}>
               <span className={`${styles[request.status.toLowerCase()]}`}></span> {request.status}
           </p>

           <div className={styles.request_card_actions}>
               <Link to={`/request/${request._id}`}>
                   <BsReceipt/>Detalhar 
                </Link>
               <button onClick={remove}>
                   <BsFillTrashFill/>Excluir
               </button>
           </div>
       </div> 
    )
}

export default RequestCard