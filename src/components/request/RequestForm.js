import { useState } from 'react'

import Input from '../form/Input'
import SelectOrigin from '../form/SelectOrigin'
import SelectDRE from '../form/SelectDRE'
import SelectForm from '../form/SelectForm'
import SubmitButton from '../form/SubmitButton'
import TextArea from '../form/TextArea'

import { OptionsForSelect } from '../../utilities/OptionsForSelect'

import styles from './RequestForm.module.css'


function RequestForm({ user, handleSubmit, btnText, requestData }){

    const [request, setRequest] = useState( requestData || {} )
    const [selectedDRE, setSelectedDRE] = useState(" ")
    const [mensagemValidadeDRE, setMensagemValidadeDRE] = useState(false)

    const optionCompany = [
        { value: '195 - Ri Happy Macaé', label: '195 - Ri Happy Macaé' },
        { value: '247 - Ri Happy Cachoeiro de Itapemirim', label: '247 - Ri Happy Cachoeiro de Itapemirim' },  
        { value: '256 - Ri Happy Ubá', label: '256 - Ri Happy Ubá' }, 
        { value: '262 - Ri Happy Rio das Ostras', label: '262 - Ri Happy Rio das Ostras' }, 
        { value: '1265 - Ri Happy Nova Friburgo', label: '1265 - Ri Happy Nova Friburgo' }, 
        { value: '283 - Ri Happy Campos dos Goytacazes', label: '283 - Ri Happy Campos dos Goytacazes' }, 
        { value: '292 - Ri Happy Cabo Frio', label: '292 - Ri Happy Cabo Frio' }, 
        { value: 'SmartTour', label: 'SmartTour' }, 
        { value: 'Santos Holding', label: 'Santos Holding' }, 
      ]

      const optionYourCompany = [
        { value: user.company, label: user.company },
      ]      
    
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

    const handleCompany = (event) => {
        request.company = event.value
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
            if((request.class_dre === 'Royalties Ri Happy') || 
                (request.class_dre === 'Fundo de Propaganda Ri Happy') || 
                (request.class_dre === 'DARF CSLL') || 
                (request.class_dre === 'DARF IRPJ') || 
                (request.class_dre === 'Pró Labore') || 
                (request.class_dre === 'Rei do Mate') ||
                (request.class_dre === 'Ri Happy Macaé') ||
                (request.class_dre === 'Ri Happy Cachoeiro de Itapemirim') ||
                (request.class_dre === 'Ri Happy Ubá') ||
                (request.class_dre === 'Ri Happy Rio das Ostras') ||
                (request.class_dre === 'Ri Happy Nova Friburgo') ||
                (request.class_dre === 'Ri Happy Campos Dos Goytacazes') ||
                (request.class_dre === 'Ri Happy Cabo Frio')
            ) {
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
                text="Título da Solicitação"
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

            {((user.permission === "financeiro" ) || (user.permission === "supervisor" ) || (user.permission === "admin" )) ? (
                <SelectForm 
                    option={optionCompany}
                    name="company" 
                    text="Selecione a Empresa" 
                    placeholder='Selecione uma empresa'
                    handleSelectChange={handleCompany}        
                />
            ) : (
                <SelectForm 
                    option={optionYourCompany}
                    name="company" 
                    text="Selecione a Empresa" 
                    placeholder='Selecione uma empresa'
                    handleSelectChange={handleCompany}        
                />
            )}

            
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

            {(selectedDRE === ' ') || 
                (selectedDRE === 'Fornecedor') || 
                (selectedDRE === 'Royalties Ri Happy') || 
                (selectedDRE === 'Fundo de Propaganda Ri Happy') || 
                (selectedDRE === 'DARF CSLL') || 
                (selectedDRE === 'DARF IRPJ') || 
                (selectedDRE === 'Pró Labore') ||
                (selectedDRE === 'Rei do Mate') ||
                (selectedDRE === 'Ri Happy Macaé') ||
                (selectedDRE === 'Ri Happy Cachoeiro de Itapemirim') ||
                (selectedDRE === 'Ri Happy Ubá') ||
                (selectedDRE === 'Ri Happy Rio das Ostras') ||
                (selectedDRE === 'Ri Happy Nova Friburgo') ||
                (selectedDRE === 'Ri Happy Campos Dos Goytacazes') ||
                (selectedDRE === 'Ri Happy Cabo Frio')
            ? (
                <></>
                ) : (
                    <SelectForm
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
                placeholder="Insira uma observação (Opcional)"
                handleOnChange={handleChange}
                value={request.request_observation ? request.request_observation : ''}
            />

            <SubmitButton text={btnText}/>
        </form>

    )
}

export default RequestForm