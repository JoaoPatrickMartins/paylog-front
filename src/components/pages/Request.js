import styles from './Request.module.css'

import Loading from '../layout/Loading'
import LoadingError from '../layout/LoadingError'
import Container from '../layout/Container'
import Message from '../layout/Message'

import RequestForm from '../request/RequestForm'

import {  useParams } from 'react-router-dom'
import { useState } from 'react'
import { BsCaretDownFill, BsCaretLeftFill, BsCaretUpFill, BsXLg, BsCheckLg, BsPencil } from 'react-icons/bs'
import {IoShareOutline} from 'react-icons/io5'
 
import { useContext, useEffect } from 'react'

import { AuthContext } from '../../context/auth'

import { getRequest, editRequestStatus, editRequest, editRequestSupervisor } from "../../services/api"


function Request(){

    const { requestUserId ,requestId } = useParams()
    const { user } = useContext(AuthContext);
    const [request , setRequest] = useState([])
    const [showRequestForm,setShowRequestForm] = useState(false)
    const [showPlusInfo, setShowPlusInfo] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false)
    const [message, setMessage] = useState()
    

    const loadRequest = async(query = '') => {
        try {
            const response = await getRequest(requestUserId, requestId);
            setRequest(response.data);
            setLoading(false);
        } catch (err) {
            setLoadingError(true);
        }

        
    }

    useEffect( () => {
        (async () => await loadRequest())();
    }, []);

    function toggleRequestForm(){
        setShowRequestForm(!showRequestForm)
    }

    function togglePlusInfo(){
        setShowPlusInfo(!showPlusInfo)
    }

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
            loadRequest();
        } catch (err) {
            console.error(err);
            //fazer msg de erro
        }
    }

    const upDateSupervisor = async (request) => {
        request.forward_to_supervisor = true;
        console.log(request.checked)
        try {
            await editRequestSupervisor(requestUserId, requestId, request.forward_to_supervisor);
            loadRequest();
            window.history.back();
        } catch (err) {
            console.error(err);
            //fazer msg de erro
        }
    }


    function sendSupervisor (e) {
        e.preventDefault()
        upDateSupervisor(request)
    }

    function upDateStatusAprove(e) {
        e.preventDefault()
        statusUpdate(request, "Aprovado")
        setMessage( 'Solicitação aprovada com sucesso!' )
    }

    function upDateStatusReprove(e) {
        e.preventDefault()
        statusUpdate(request, "Reprovado")
        setMessage( 'Solicitação reprovada com sucesso!' )
    }

    const onClickBack = async (e) => {
        e.preventDefault();
        window.history.back();
    }

    const editPost = async (request) => {
        try {
            await editRequest(requestUserId, requestId, request.title, request.value, request.origin_id, request.request_date, request.due_date, request.class_dre, request.subclass_dre, request.request_observatio);
            console.log("Request updated successfully")
            window.history.back();
        } catch (err) {
            console.error(err);
            //fazer msg de erro
        }
    }

    return(
        <>
           {!loading ? (
            <div className={styles.request_details_container}>
                <div className={styles.option_container}>
                    <button className={styles.btn_back} onClick={onClickBack}><BsCaretLeftFill /> Voltar</button>
                </div>



               <div className={styles.request_details}>
               <Container customClass="column" >
                   { message && <Message type={'success'} msg={message} />}
                   <div className={styles.details_container}>  
                        <div className={styles.header_container}>
                            <div className={styles.title_frame}>
                                    <h1>{ request.title }</h1>
                                    <div >
                                        {(request.status === 'Pendente') ? (
                                            <>
                                                {!showRequestForm ? (
                                                    <button className={styles.btn_edit} onClick={toggleRequestForm}><BsPencil/></button>
                                                    ) : (
                                                        <button className={styles.btn_edit} onClick={toggleRequestForm}><BsCaretLeftFill /></button>
                                                    )}
                                                {(user.permission === 'admin') && (
                                                    <button className={styles.btn_sup} onClick={sendSupervisor}><IoShareOutline/></button>
                                                )}
                                            </>
                                        ):(
                                            <>
                                                {(user.permission === 'admin') && (
                                                    <>
                                                        {!showRequestForm ? (
                                                            <button className={styles.btn_edit} onClick={toggleRequestForm}><BsPencil/></button>
                                                        ) : (
                                                            <button className={styles.btn_edit} onClick={toggleRequestForm}><BsCaretLeftFill /></button>
                                                        )}   
                                                    </>       
                                                )}
                                            </>
                                        )}
                                    </div>
                            </div>
                            {showRequestForm && (
                                <p>Edite sua solicitação de pagamento e aguarde ser aprovado</p>
                            )}
                       </div>

                       {!showRequestForm ? (
                           <div className={styles.request_info}>
                               <p>
                                   <span>Valor:</span> {Number.parseFloat(request.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                               </p>
                               <p>
                                   <span>Origem:</span> {request.origin_id}
                                </p>
                               <p>
                                   <span>Data de Vencimento:</span> {request.due_date.split("-").reverse().join("/")}
                               </p>
                               <p>
                                   <span>Classe do DRE:</span> {request.class_dre}
                               </p>
                               <p>
                                   <span>Subclasse do DRE:</span> {request.subclass_dre}
                               </p>
                               <p>
                                   <span>Observação:</span> {request.request_observation}
                               </p>

                               <div className={styles.status_container}>
                                   <p><span className={styles.status_container_span}>Status:</span></p>
                                   <p className={styles.status_text}>
                                       <span className={`${styles[request.status.toLowerCase()]}`}></span> {request.status}
                                   </p>
                               </div>
                               
                               {!showPlusInfo ? (<p></p>) : (
                                   <div>
                                       <div>
                                       <p>
                                           <span>Solicitante:</span> {request.requester_name}
                                       </p>
                                       <p>
                                           <span>Cargo:</span> {request.job_position}
                                       </p>
                                       <p>
                                           <span>Empresa:</span> {request.company}
                                       </p>
                                       </div>
                                   </div>
                                       
                               )}
                               <div className={styles.divisor_plus_info}>
                                   <button className={styles.button_plus_info} onClick={togglePlusInfo}>
                                           {!showPlusInfo ? ('Mais Informações') : ('Menos Informações')}
                                           {!showPlusInfo ? (<BsCaretDownFill/>) : (<BsCaretUpFill/>)}
                                   </button> 
                                   <div>
                                       <p>
                                           <span>Data da Solicitação:</span> {request.request_date.split("-").reverse().join("/")}
                                       </p>
                                       <p>
                                           <span>ID da Solicitação:</span> {request._id}
                                       </p>
                                   </div>
                               </div>
                               
                               {((request.status === 'Pendente') & (user.permission === 'admin')) ? (
                                        <div className={styles.aprover_container}>
                                        <button className={styles.button_aprovado} onClick={upDateStatusAprove}>
                                            <BsCheckLg/> Aprovar
                                        </button>
                                        <button className={styles.button_reprovado} onClick={upDateStatusReprove}>
                                            <BsXLg/> Reprovar
                                        </button>
                                        </div>  
                               ):(
                                   <></>
                               )}
                                
                           </div>                         
                       ):(
                        <div className={styles.request_info} >
                            <RequestForm user={user} handleSubmit={editPost} btnText={'Concluir edição'} requestData={request} />
                        </div>
                       )
                       }
                   </div>
                   <div className={styles.approver_info_container}>
                       {!(request.status === 'Pendente') && (
                           <p>
                               <span>{`${request.status} por:`}</span> {request.approver_name}
                           </p>
                       )}
                   </div>
               </Container>
                </div>
            </div>
           ) : (
               <>
                    {loadingError ? (
                        <LoadingError/>
                    ) : (
                        <Loading/>
                    )}
                </>
           )}
        </>
    )
}

export default Request