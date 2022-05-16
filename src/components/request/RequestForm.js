import { useState } from 'react'

import Input from '../form/Input'
import SelectOrigin from '../form/SelectOrigin'
import SelectDRE from '../form/SelectDRE'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import TextArea from '../form/TextArea'

import { OptionsForSelect } from '../../utilities/OptionsForSelect'

import styles from './RequestForm.module.css'


function RequestForm({ handleSubmit, btnText, requestData }){

    const [request, setRequest] = useState( requestData || {} )
    const [selectedDRE, setSelectedDRE] = useState(" ")
    const [mensagemValidadeDRE, setMensagemValidadeDRE] = useState(false)
    
    const submit = (e) => {
        e.preventDefault()
        if(validateSubclass(request)){
            handleSubmit(request)
        }else{
            setMensagemValidadeDRE(true)
        }
        
    }

    async function handleChange(e){
        setRequest({ ...request, [e.target.name]: e.target.value })
    }

    const handleSelectOrigin = (event) => {
        request.origin_id = event.value
    }

    const handleSelectDRE = (event) => {
        request.subclass_dre = ' '

        request.class_dre = event.value
        setSelectedDRE(event.value)
    }

    const handleSelectSubDRE = (event) => {
        request.subclass_dre = event.value
    }

    function validateSubclass(request){
        if(request.subclass_dre === ' '){
            if((request.class_dre === 'Royalties Ri Happy') || (request.class_dre === 'Fundo de Propaganda Ri Happy') || (request.class_dre === 'DARF CSLL') || (request.class_dre === 'DARF IRPJ') || (request.class_dre === 'Pró Labore')) {
                return true
            }else{
                return false
            }
        }
        return true
    }
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Titulo da Solicitação"
                name="title"
                placeholder="Insira o titulo da solicitação "
                handleOnChange={handleChange}
                value={request.title ? request.title : ''}
            />
            <Input 
                type="number"
                text="Valor da Solicitação"
                name="value"
                placeholder="Insira o valor da solicitação"
                handleOnChange={handleChange}
                value={request.value ? request.value : ''}
            />

            <SelectOrigin 
                name="origin_id" 
                text="Selecione a Origem" 
                placeholder='Selecione uma origem'
                handleSelectChange={handleSelectOrigin}                
            />

            <Input 
                type="date"
                text="Data da Solicitação"
                name="request_date"
                placeholder="Insira a data da solicitação"
                handleOnChange={handleChange}
                value={request.request_date ? request.request_date : ''}
            />
            <Input 
                type="date"
                text="Data de Vencimento"
                name="due_date"
                placeholder="Insira a data da solicitação"
                handleOnChange={handleChange}
                value={request.due_date ? request.due_date : ''}
            />
            <SelectDRE text='Classe do DRE' 
                name='class_dre' 
                placeholder='Selecione uma classe para o DRE'
                handleSelectChange={handleSelectDRE}
            />

            {(selectedDRE === ' ') || (selectedDRE === 'Royalties Ri Happy') || (selectedDRE === 'Fundo de Propaganda Ri Happy') || (selectedDRE === 'DARF CSLL') || (selectedDRE === 'DARF IRPJ') || (selectedDRE === 'Pró Labore') ? (
                <></>
                ) : (
                    <Select
                        text='Subclasse do DRE'
                        name='subclass_dre'
                        placeholder="Selecione uma subclasse para o DRE"
                        option={OptionsForSelect(selectedDRE)}
                        handleSelectChange={handleSelectSubDRE}
                    />
                )}

            {mensagemValidadeDRE && <div className={styles.err_container}><p>Classe ou Subclasse do DRE inválido</p></div>}
             
            <TextArea
                text="Observação"
                name="request_observation"
                rows="4"
                cols="20"
                placeholder="Insira uma observação (Opicional)"
                handleOnChange={handleChange}
                value={request.request_observation ? request.request_observation : ''}
            />

            <SubmitButton text={btnText}/>
        </form>

    )
}

export default RequestForm