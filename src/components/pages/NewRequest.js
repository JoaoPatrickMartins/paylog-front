import { useNavigate } from 'react-router-dom'

import RequestForm from '../request/RequestForm'
import styles from './NewRequest.module.css'

import { createRequest } from '../../services/api'

import { useContext } from 'react'

import { AuthContext } from '../../context/auth'


function NewRequest(){
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    async function createPost(request){
        //initialize info.requester, status and approver name
        request.requester_name = "Joao Patrick Martins"
        request.job_position = "Tecnico de TI"
        request.company = ["Santos Holding"]

        try {
            await createRequest(user?.id, request.title, request.value, request.origin_id, request.request_date, request.due_date, request.class_dre, request.subclass_dre, request.request_observation, request.requester_name, request.job_position, request.company);
            console.log("new request created with sucess.")
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