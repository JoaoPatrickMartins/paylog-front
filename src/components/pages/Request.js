/*import styles from './Request.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'

import RequestForm from '../request/RequestForm'*/

import {  useParams } from 'react-router-dom'
import { useState } from 'react'
/*import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import { BsCaretDownFill, BsCaretLeftFill, BsCaretUpFill, BsXLg, BsCheckLg, BsPencil } from 'react-icons/bs'*/

import { useContext, useEffect } from 'react'

import { AuthContext } from '../../context/auth'

import { getRequest } from "../../services/api"


function Request(){

    const { requestId } = useParams()
    const { user } = useContext(AuthContext);
    const [request , setRequest] = useState([])
   /* const [showRequestForm,setShowRequestForm] = useState(false)
    const [showPlusInfo, setShowPlusInfo] = useState(false)
    const [message, setMessage] = useState()*/
    

    const loadRequest = async(query = '') => {
        try {
            const response = await getRequest(user?.id, requestId);
            setRequest(response.data);
            //setLoading(false);
        } catch (err) {
            //setLoadingError(true);
        }

        
    }

    useEffect( () => {
        (async () => await loadRequest())();
    }, []);




   /* useEffect(() => {
      setTimeout(() => {
        fetch(`http://localhost:5000/requests/${requestId}`, {
            method: 'GET',
            headers: {
              'Content-Type' : 'application/json'
            },
          })
          .then((resp) => resp.json())
          .then((data) => {
            setRequest(data)
           })
          .catch((err) => console.log(err))
      }, 300);
    }, [requestId])

    function toggleRequestForm(){
        setShowRequestForm(!showRequestForm)
    }

    function togglePlusInfo(){
        setShowPlusInfo(!showPlusInfo)
    }

    function handleStatus( request ){
        fetch(`http://localhost:5000/requests/${request.id}`,{
            method:'PATCH',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(request),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setRequest(data)
        })
        .catch((err) => console.log(err))
    }
   
    function upDateStatusAprove(e) {
        e.preventDefault()
        request.status = "Aprovado"
        handleStatus(request)
        setMessage( 'Solicitação aprovada com sucesso!' )
    }

    function upDateStatusReprove(e) {
        e.preventDefault()
        request.status = "Reprovado"
        handleStatus(request)
        setMessage( 'Solicitação reprovada com sucesso!' )
    }

    function editPost(request){
        fetch(`http://localhost:5000/requests/${request.id}`,{
            method:'PATCH',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(request),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setRequest(data)
            setShowRequestForm(false)
            setMessage( 'Edição realizada com Sucesso!' )
        })
        .catch((err) => console.log(err))
    }*/

    return(
        <div>UserId: {user?.id}, requestId: {requestId}, Titulo: {request.title}</div>
        /*
        <>
            {request.title ? (
                    <div className={styles.request_details}>
                        <Container customClass="column" >
                            { message && <Message type={'success'} msg={message} />}
                            <div className={styles.details_container}>
                                <h1>{ request.title }</h1>
                                <div className={styles.option_container}>
                                    {!showRequestForm && (<Link className={styles.btn} to="/requests"><BsCaretLeftFill /> Voltar</Link>)}
                                    <button className={styles.btn} onClick={toggleRequestForm}>
                                        {!showRequestForm ?  (<BsPencil/>) : (<BsCaretLeftFill/>)}
                                        {!showRequestForm ?  ('Editar Solicitação') : ('Voltar')}
                                    </button>
                                </div>
                                {!showRequestForm ? (
                                
                                    <div className={styles.request_info}>
                                        <p>
                                            <span>Valor:</span> {request.value}
                                        </p>
                                        <p>
                                            <span>Origem:</span> {request.origin_id.name}
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
                                                    <span>ID da Solicitação:</span> {request.id}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {request.status === 'Pendente' && (
                                            <div className={styles.aprover_container}>
                                            <button className={styles.button_aprovado} onClick={upDateStatusAprove}>
                                                 <BsCheckLg/> Aprovar
                                            </button>
                                            <button className={styles.button_reprovado} onClick={upDateStatusReprove}>
                                                <BsXLg/> Reprovar
                                            </button>
                                            </div>  
                                        )}
                                         
                                    </div>                         
                                ):(
                                    <div className={styles.request_info} >
                                        <RequestForm handleSubmit={editPost} btnText={'Concluir edição'} requestData={request} />
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
                ) : ( 
                    <Loading /> 
            )}
        </>*/
    )
}

export default Request