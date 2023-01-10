//Page Request History
 
import { useLocation } from "react-router-dom" 

import { useState, useEffect, useContext } from "react"

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading/index"
import LoadingError from "../layout/LoadingError"

import RequestCard from "../request/RequestCard"

import styles from "./Requests.module.css"

import { getRequests } from "../../services/api"

import { AuthContext } from "../../context/auth"

import SortDate from "../../utilities/SortDate"

import FilterBar from "../layout/FilterBar/index"


function Requests (){
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const [requestMessage, setRequestMessage] = useState(''); //set mensagem de solicitação excluída
    const query = '';

    const [page, setPage] = useState(1);
    const ITEMS_PER_PAGE = 30;

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = page * ITEMS_PER_PAGE;

    const paginatedItems = requests.slice(startIndex, endIndex);

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }
    
    const loadData = async(querySelect) => {
        try {
            if(querySelect !== ''){
                const response = await getRequests(user?.id,querySelect);

                const arr = response.data;
                setRequests(SortDate(arr,'request'));
                console.log(requests)
                setLoading(false);
            }else{
                const response = await getRequests(user?.id,query);

                const arr = response.data;
                setRequests(SortDate(arr,'request'));
                setLoading(false);
            }
            
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
                <div className={styles.title_frame}>
                    <h1>Histórico de Solicitações</h1>
                </div>
                <LinkButton to="/newrequest" text="Criar Solicitação" />
           </div>
           <div>
               <FilterBar loadData={loadData} />
           </div>

            {message && <Message type="success" msg={message} />}
            {requestMessage && <Message type="success" msg={requestMessage} />}

            <Container customClass= "start">
                    {paginatedItems.length > 0 &&
                        paginatedItems.map((item, index) => (
                        
                                <RequestCard 
                                    key={index}
                                    request={item} 
                                    loadRequests={loadData} 
                                    msg={setRequestMessage} 
                                />
                        ))
                    }

                    {loading && <Loading />}
                    {loadingError && <LoadingError/>}
                    {!loading && requests.length === 0 && (
                        <p>Não há Solicitações cadastradas!</p>
                    )}
            </Container>
            <div className= {styles.navigation_button_container}>
                        {(page !== 1) ? (
                            <button className={styles.navigation_button} onClick={(e) =>{ 
                                e.preventDefault()
                                setLoading(true)
                                 setPage(page - 1)
                                 setTimeout(() => {
                                    setLoading(false)
                                  }, 300);
                            }}>Anterior</button>
                        ):(<div></div>)}
                        
                        <button className={styles.navigation_button} onClick={(e) => {
                            e.preventDefault()
                            setLoading(true)
                            setPage(page + 1)
                            setTimeout(() => {
                                setLoading(false)
                              }, 300);
                            console.log(paginatedItems)
                        }}>Próximo</button>
                    </div>
       </div>
    )
}

export default Requests
