import { useLocation } from "react-router-dom" 

import { useState, useEffect } from "react"

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading"

import RequestCard from "../request/RequestCard"

import styles from "./Requests.module.css"


function Requests (){
    const [requests, setRequests] = useState([])
    const [removeLoading, setRemoveLoading] = useState(true)
    const [requestMessage, setRequestMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }
    
    useEffect(() => {
       setTimeout(() => {
            fetch('http://localhost:5000/requests', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setRequests(data)
                setRemoveLoading(false)
            })
            .catch((err) => console.log(err))
       },300)
    },[])

    function removeRequest(id){
        fetch(`http://localhost:5000/requests/${id}`, {
            method:"DELETE",
            headers: {
                'Content-Type' : 'application/json' ,
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setRequests(requests.filter((request) => request.id !== id))
            //message
            setRequestMessage('Solicitação de pagamento removida com sucesso!')
        })  
    }

    return(
       <div className = { styles.request_container }>
           <div className = { styles.title_container } >
                <h1>Minhas Solicitações</h1>
                <LinkButton to="/newrequest" text="Criar Registro" />
           </div>
            {message && <Message type="success" msg={message} />}
            {requestMessage && <Message type="success" msg={requestMessage} />}
            <Container customClass= "start">
                {requests.length > 0 &&
                    requests.map((request) => (
                        <RequestCard request={request} handleRemove={removeRequest}/>
                    ))
                }
                {removeLoading && <Loading />}
                {!removeLoading && requests.length === 0 && (
                    <p>Não há Solicitações cadastradas!</p>
                )}
            </Container>
       </div>
    )
}

export default Requests
