import { useNavigate } from 'react-router-dom'

import RequestForm from '../request/RequestForm'
import styles from './NewRequest.module.css'

import { createRequest } from '../../services/api'

const userId = '623cc0bae948ad0a29081d06';

function NewRequest(){

    const navigate = useNavigate()

    async function createPost(request){
        //initialize info.requester, status and approver name
        request.requester_name = "Joao Patrick Martins"
        request.job_position = "Tecnico de TI"
        request.company = ["Santos Holding"]

        console.log('new request', request);
        try {
            await createRequest(userId, request.title, request.value, request.origin_id, request.request_date, request.due_date, request.class_dre, request.subclass_dre, request.request_observation, request.requester_name, request.job_position, request.company);
            navigate('/requests', { state: {message: 'Solicitação de pagamento criada com sucesso!'} });
        } catch (err) {
            console.error(err);
            //fazer msg de erro
        }
    }

    return(
        <div className={styles.newrequest_container}>
            <h1>Criar Solicitação</h1>
            <p>Crie sua solicitação de pagamento e aguarde ser aprovado</p>
            <RequestForm handleSubmit={createPost} btnText="Criar Solicitação" />
        </div>
    )
}

export default NewRequest