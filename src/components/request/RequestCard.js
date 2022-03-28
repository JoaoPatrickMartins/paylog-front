import styles from './RequestCard.module.css'

import { Link } from 'react-router-dom'

import { BsReceipt, BsFillTrashFill } from 'react-icons/bs'

function RequestCard( {request, handleRemove  } ) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(request.id)
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
               <Link to={`/request/${request.id}`}>
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