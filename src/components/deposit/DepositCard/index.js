import { Styles } from './styles';

import { useState, useEffect } from 'react'

import { IoPencilSharp, IoTrashSharp  } from "react-icons/io5"

import Input from '../../form/Input'

import { editDeposit, destroyDeposit } from "../../../services/api"



function DepositCard( { user, forSetdeposit, setLoading, loadDeposits} ) {

    const [deposit, setDeposit] = useState(forSetdeposit);
    const [visibleButton, setVisibleButton] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(true);
    const [visibleErrorMsg, setVisibleErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
   
    const toggleCardDeposit = async (e) => {
        e.preventDefault();
        setVisibleButton(!visibleButton)
    }

    const onClickEdit = async (e) => {
        e.preventDefault();
        setVisibleEdit(false)
    }

    async function handleChange(e){
        setDeposit({ ...deposit, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        editPost(user, deposit)
        setErrorMsg(false)
    }

    const editPost = async (user, deposit, loadData) => {
        try {
            await editDeposit(user.id, deposit._id, deposit.value, deposit.depositDate);
            console.log("Request updated successfully")
            setVisibleEdit(true)
            setVisibleButton(false)
        } catch (err) {
            console.error(err);
            setErrorMsg('Todos os Campos obrigatórios devem ser preenchidos. ')
            setVisibleErrorMsg(true)
        }
    }

    const remove = async(e) => {
        setLoading(true)
        try {
            await destroyDeposit(user.id, deposit._id);
            await loadDeposits();
            setVisibleButton(false)
   
        } catch (err) {
            console.log(err)
            setLoading(false)
            setErrorMsg('Erro na remoção do depósito.')
            setVisibleErrorMsg(true)
        }
        //setVisibleBoxDialogDelete(false);
        //msg('Solicitação excluida com sucesso!');
    }


    return(
        <Styles>
            <li>
                {visibleEdit ?(
                    <>
                        {visibleButton && (
                            <div className='manipulation_button_container'>
                                <button className='btn' onClick={onClickEdit}><IoPencilSharp/></button>
                                <button className='btn' onClick={remove}><IoTrashSharp/></button>
                            </div>
                        )}
                        
                        <div onClick={toggleCardDeposit} className='central_container'>
                            <div className='depositor_info_container'>
                                <h4>{deposit.depositorName}</h4>
                                <p>{deposit.depositCompany}</p>
                            </div>
                            <div className='value_container'><h2>{Number.parseFloat(deposit.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2></div>
                        </div>
                        <div className='date_container'><p>{deposit.depositDate.split("-").reverse().join("/")}</p></div>  
                    </>  
                ):(
                    <>
                        <form onSubmit={submit}>
                            
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

                            <button className='submit_button'>Confirmar</button>
                        </form>
                        <div className="msg_container">
                            {visibleErrorMsg && (
                                <p>{errorMsg}</p>
                            )}
                        </div>
                    </>
                )}
                

                
            </li>
        </Styles>
    )
}

export default DepositCard