import { Container } from './stylesRequestCardPending';

import { useNavigate } from 'react-router-dom'

import {  IoCloseSharp, IoCheckmarkSharp, IoFileTrayFullOutline } from 'react-icons/io5'

import { useContext } from 'react'

import { AuthContext } from '../../context/auth'

import { editRequestStatus, editRequestChecked } from "../../services/api"

function RequestCardPending( { request, loadRequests, msg } ) {
    const { user } = useContext(AuthContext);
    const requestId = request._id;
    const requestUserId = request.userId;
    const navigate = useNavigate();

    const statusUpdate = async (request, status) => {
        request.status = status;
        request.approver_name = `${user.first_name} ${user.last_name}`; 
        request.forward_to_supervisor = false;
        if(user.permission === 'admin'){
            request.checked = true;
            
        }else{
            request.forward_to_supervisor = false;
        }
        
        
        try {
            await editRequestStatus(requestUserId, requestId, request.status, request.approver_name, request.forward_to_supervisor, request.checked);
            loadRequests();
        } catch (err) {
            console.error(err);
            //fazer msg de erro
        }
    }

    const upDateChecked = async (request) => {
        request.forward_to_supervisor = false;
        console.log(request.checked)
        try {
            await editRequestChecked(requestUserId, requestId, request.forward_to_supervisor);
            loadRequests();
        } catch (err) {
            console.error(err);
            //fazer msg de erro
        }
    }

    function fileRequest (e) {
        e.preventDefault()
        upDateChecked(request)
        msg( 'Solicitação Arquivada com sucesso!' )
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
                
                    {((request.status === 'Pendente') & (user.permission === 'admin')) ? (    
                        <div className='request_card_actions'>        
                            <button className='button_approved' onClick={upDateStatusAprove}>
                                <IoCheckmarkSharp size={20}/> Aprovar   
                            </button>
                            <button className='button_disapproved' onClick={upDateStatusReprove}>
                                <IoCloseSharp size={20}/> Reprovar
                            </button>
                        </div>
                    ): (
                        <>
                            {((user.permission === 'supervisor')) ? ( 
                                <> 
                                    {((request.forward_to_supervisor)) && (
                                        <div className='request_card_actions'>        
                                        <button className='button_approved' onClick={upDateStatusAprove}>
                                            <IoCheckmarkSharp size={20}/> Aprovar   
                                        </button>
                                        <button className='button_disapproved' onClick={upDateStatusReprove}>
                                            <IoCloseSharp size={20}/> Reprovar
                                        </button>
                                        </div>
                                    )}
                                    {((request.checked)) && (
                                        <div className='request_card_actions'>        
                                        <button className='button_file' onClick={fileRequest}>
                                            <IoFileTrayFullOutline size={20}/> Arquivar   
                                        </button>
                                        </div>
                                    )}
                                </>
                                
                            ): (<div className='request_card_actions_none'></div>)}
                        </>
                    )} 
            </div>
        </div> 
       </Container>
    )
}

export default RequestCardPending