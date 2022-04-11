import { useLocation } from "react-router-dom" 

import { useState, useEffect } from "react"

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading"
import LoadingError from "../layout/LoadingError"

import RequestCard from "../request/RequestCard"

import styles from "./Requests.module.css"

import { getRequests } from "../../services/api"


const userId = '623cc0bae948ad0a29081d06';

function Requests (){
    const [requests, setRequests] = useState([])
    const [removeLoading, setRemoveLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false)
    const [requestMessage, setRequestMessage] = useState('') //set mensagem de solicitação excluída

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    const loadData = async(query = '') => {
        try {
            const response = await getRequests(userId);
            setRequests(response.data);
            setRemoveLoading(false);
        } catch (err) {
            setLoadingError(true);
        }

        
    }

    useEffect( () => {
        (async () => await loadData())();
    }, []);

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
                        <RequestCard request={request} key={request._id} msg={setRequestMessage} />
                    ))
                }

                {removeLoading && <Loading />}
                {loadingError && <LoadingError/>}
                {!removeLoading && requests.length === 0 && (
                    <p>Não há Solicitações cadastradas!</p>
                )}
            </Container>
       </div>
    )
}

export default Requests
