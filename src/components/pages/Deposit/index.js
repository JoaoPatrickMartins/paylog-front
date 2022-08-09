import { Styles } from './styles';

import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom'

import { createDeposit } from '../../../services/api'

import { AuthContext } from '../../../context/auth'

import Input from '../../form/Input';
import SubmitButton from '../../form/SubmitButton'

function Deposit(depositData){

    const { user } = useContext(AuthContext);
    const [deposit, setdeposit] = useState(depositData || {})
    const [errorMsg, setErrorMsg] = useState(false)
    const navigate = useNavigate();

    async function createPost(deposit){
        try {
            await createDeposit(user?.id, deposit.value, deposit.depositDate, user.company );
            console.log("new request created with sucess.")
            navigate('/requests', { state: {message: 'Solicitação de pagamento criada com sucesso!'} });
        } catch (err) {
            console.error(err);
            setErrorMsg(true)
        }
    }

    const submit = (e) => {
        e.preventDefault()
        createPost(deposit)
        console.log("enviado")
    }

    async function handleChange(e){
        setdeposit({ ...deposit, [e.target.name]: e.target.value })
    }

    return(
        <Styles>
            <div className={"newrequest_container"}>
                <div className={"title_container"}>
                    <div className={"title_frame"}>
                        <h1>Informar Depósito</h1>
                    </div>
                    <p>Informe realização do depósito e aguarde confirmação.</p>
                </div>

                <form onSubmit={submit} className={'form'}>
                
                    <Input 
                        type="number"
                        text="Valor do depósito"
                        name="value"
                        placeholder="Insira o valor do depósito"
                        handleOnChange={handleChange}
                       value={deposit.value ? deposit.value : ''}
                    />

                    <Input 
                        type="date"
                        text="Data do depósito"
                        name="depositDate"
                        placeholder="Insira a data do depósito"
                        handleOnChange={handleChange}
                        value={deposit.depositDate ? deposit.depositDate : ''}
                    />

                    <SubmitButton text={"Confirmar"}/>
                </form>
                <div className={"msg_container"}>
                    {errorMsg && (
                        <p>Todos os Campos obrigatórios devem ser preenchidos.</p>
                    )}
                </div>
            </div>
        </Styles>
        
    )
}

export default Deposit