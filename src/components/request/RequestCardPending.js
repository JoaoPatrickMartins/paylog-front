import { Container } from './stylesRequestCardPending';

import { useNavigate } from 'react-router-dom'

import {  BsCheckLg, BsXLg } from 'react-icons/bs'
import {  IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5'

import { useContext } from 'react'

import { AuthContext } from '../../context/auth'

import { editRequestStatus } from "../../services/api"

function RequestCardPending( { request, loadRequests, msg } ) {
    const { user } = useContext(AuthContext);
    const requestId = request._id;
    const requestUserId = request.userId;
    const navigate = useNavigate();

    const statusUpdate = async (request, status) => {
        request.status = status;
        request.approver_name = `${user.first_name} ${user.last_name}`; 
        
        try {
            await editRequestStatus(requestUserId, requestId, request.status, request.approver_name);
            loadRequests();
        } catch (err) {
            console.error(err);
            //fazer msg de erro
        }
    }

    function upDateStatusAprove(e) {
        e.preventDefault()
        statusUpdate(request, "Aprovado")
        msg( 'Solicitação aprovada com sucesso!' )
    }

    function upDateStatusReprove(e) {
        e.preventDefault()
        statusUpdate(request, "Reprovado")
        msg( 'Solicitação reprovada com sucesso!' )
    }

    const onClickCard = () =>{
        navigate(`/request/${requestUserId}/${requestId}`)
    }

    return(
        <Container status={request.status}>
        <div className='request_card' >

            <div className='title_card_container' onClick={onClickCard}>
                    <h4>{request.title}</h4>    
            </div>

            <div >
                    <div className='info_container' onClick={onClickCard}>
                        <p>
                            <span>Empresa:</span> {request.company}
                        </p>
                        <p>
                            <span>Vencimento:</span> {request.due_date.split("-").reverse().join("/")}
                        </p>
                        <p>
                            <span>Solicitante:</span> {request.requester_name}
                        </p>
                        <p className='value'>
                            <span>Valor:</span> {request.value}
                        </p>   
                    </div>

                    {(request.status === 'Pendente') && (    
                        <div className='request_card_actions'>        
                            <button className='button_approved' onClick={upDateStatusAprove}>
                                <IoCheckmarkSharp size={25}/> Aprovar
                            </button>
                            <button className='button_disapproved' onClick={upDateStatusReprove}>
                                <IoCloseSharp size={25}/> Reprovar
                            </button>
                        </div>
                    )} 
            </div>
        </div> 
       </Container>
    )
}

export default RequestCardPending