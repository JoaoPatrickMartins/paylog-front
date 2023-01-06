import { Container } from './stylesRequestCard';

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { IoTrashSharp, IoNewspaperOutline } from 'react-icons/io5'

import { useContext, useState } from 'react'

import { AuthContext } from '../../context/auth'

import BoxDialog from '../layout/BoxDialog/index'


function RequestCard( { request, loadRequests, msg } ) {
    const { user } = useContext(AuthContext);
    const requestId = request._id;
    const requestUserId = request.userId;
    const navigate = useNavigate();
    const [visibleBoxDialogDelete, setvisibleBoxDialogDelete] = useState()
    

    const remove = async (e) => {
        //e.preventDefault();
        setvisibleBoxDialogDelete(true);
    }

    const onClickCard = () =>{
        navigate(`/request/${requestUserId}/${requestId}`)
    }

    return(
        <Container status={request.status} permission={user.permission}>

            {visibleBoxDialogDelete && 
                <BoxDialog 
                    requestUserId={requestUserId} 
                    requestId={requestId} 
                    loadRequests={loadRequests} 
                    setVisibleBoxDialogDelete={setvisibleBoxDialogDelete} 
                    msg={msg}
                />
            }

            <div className='request_card' >
                <div className='title_card_container' onClick={onClickCard}>
                        <h4>{request.title}</h4>    
                </div>

                <div className='body_container'>
                        <div className='info_container' onClick={onClickCard}>
                            <p>
                                <span>Empresa:</span> {request.company}
                            </p>
                            <p>
                                <span>Vencimento:</span> {request.due_date.split("-").reverse().join("/")}
                            </p>
                            <p>
                                <span>Valor:</span> {Number.parseFloat(request.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </p>
                            <p>
                                <span>Solicitante:</span> {request.requester_name}
                            </p>
                        </div>
                        <div className='request_card_actions'>
                            <Link to={`/request/${requestUserId}/${requestId}`}>
                                <IoNewspaperOutline size={20}/>Detalhar 
                                </Link>
                                {(request.status === 'Pendente') ? (
                                    <button onClick={remove}>
                                        <IoTrashSharp size={20}/>Excluir
                                    </button>
                                ):(
                                    <>
                                        {((user.permission === 'admin') || (user.permission === 'supervisor')) ? (
                                            <button onClick={remove}>
                                                <IoTrashSharp size={20}/>Excluir
                                            </button>
                                        ):(
                                            <></>
                                        )}
                                    </>
                                )}   
                        </div>
                </div>
                
            </div> 
            
       </Container>
    )
}

export default RequestCard