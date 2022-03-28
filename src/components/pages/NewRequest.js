import { useNavigate } from 'react-router-dom'

import RequestForm from '../request/RequestForm'
import styles from './NewRequest.module.css'

function NewRequest(){

    const navigate = useNavigate()

    function createPost(request){
        //initialize info.requester, status and approver name
        request.requester_name = "Joao Patrick Martins"
        request.job_position = "Tecnico de TI"
        request.company = ["Santos Holding"]
        request.status = "Pendente"
        request.approver_name = "Leonardo da Silva dos Santos"

        fetch('http://localhost:5000/requests', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(request),
        })
        .then((resp) => resp.json())
        .then((data) => {
            //redirect
            navigate('/requests', { state: {message: 'Solicitação de pagamento criada com sucesso!'} })
        })
        .catch((err) => console.log(err))
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