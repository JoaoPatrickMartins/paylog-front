//Page Request Pending

import { useLocation } from "react-router-dom" 

import { useState, useEffect, useContext } from "react"

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading"
import LoadingError from "../layout/LoadingError"

import RequestCardPending from "../request/RequestCardPending"

import styles from "./Requests.module.css"

import { getRequestsPending } from "../../services/api"

import { AuthContext } from "../../context/auth"

import SortNextDueDate from "../../utilities/SortNextDueDate"

function RequestsPending(){
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const [requestMessage, setRequestMessage] = useState(''); 

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    const loadRequestsPending = async(query = '') => {
        try {
            const response = await getRequestsPending(user?.id);

            const arr = response.data;
            setRequests(SortNextDueDate(arr));
            setLoading(false);
        } catch (err) {
            setLoadingError(true);
        }

        
    }

    useEffect( () => {
        (async () => await loadRequestsPending())();
    }, []);

    return(
        <div className = { styles.request_container }>

           <div className = { styles.title_container } >
                <div className={styles.title_frame}>
                    <h1>Solicitações Pendentes</h1>
                </div>
                <LinkButton to="/newrequest" text="Criar Solicitação" />
           </div>

            {message && <Message type="success" msg={message} />}
            {requestMessage && <Message type="success" msg={requestMessage} />}

            <Container customClass= "start">
                {requests.length > 0 &&
                    requests.map((request) => (
                        <RequestCardPending request={request} key={request._id} loadRequests={loadRequestsPending} msg={setRequestMessage} />
                    ))
                }

                {loading && <Loading />}
                {loadingError && <LoadingError/>}
                {!loading && requests.length === 0 && (
                    <p>Não existem solicitações pendentes no momento!</p>
                )}
            </Container>
       </div>
    )
}

export default RequestsPending