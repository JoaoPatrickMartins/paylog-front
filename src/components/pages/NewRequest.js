import { useNavigate } from 'react-router-dom'

import RequestForm from '../request/RequestForm'

import styles from './NewRequest.module.css'

import { createRequest } from '../../services/api'

import { useContext, useState } from 'react'

import { AuthContext } from '../../context/auth'


function NewRequest(){
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(false)

    async function createPost(request){
        try {
            await createRequest(user?.id, request.title, request.value, request.company, request.origin_id, request.request_date, request.due_date, request.class_dre, request.subclass_dre, request.request_observation);
            console.log("new request created with sucess.")
            navigate('/requests', { state: {message: 'Solicitação de pagamento criada com sucesso!'} });
        } catch (err) {
            console.error(err);
            setErrorMsg(true)
        }
    }

    return(
        <div className={styles.newrequest_container}>
            <div className={styles.title_container}>
                <div className={styles.title_frame}>
                    <h1>Criar Solicitação</h1>
                </div>
                <p>Crie sua solicitação de pagamento e aguarde ser aprovado</p>
            </div>
            <RequestForm user={user} handleSubmit={createPost} btnText="Solicitar" />
            <div className={styles.msg_container}>
                {errorMsg && (
                    <p>Todos os Campos obrigatórios devem ser preenchidos.</p>
                )}
            </div>
        </div>
    )
}

export default NewRequest