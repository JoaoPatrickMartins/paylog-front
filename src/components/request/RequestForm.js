import { useState } from 'react'

import Input from '../form/Input'
//import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import TextArea from '../form/TextArea'

import styles from './RequestForm.module.css'


function RequestForm({ handleSubmit, btnText, requestData }){
    //const [origins,setOrigins] = useState([])

    const [request, setRequest] = useState( requestData || {} )

   /* useEffect(() => {
        fetch('http://localhost:5000/origins', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setOrigins(data)
        })
        .catch((err) => console.log(err))
    },[])*/
    
    const submit = (e) => {
        e.preventDefault()
        //console.log(request)
        handleSubmit(request)
    }

    async function handleChange(e){
        setRequest({ ...request, [e.target.name]: e.target.value })
    }

    /*function handleSelect(e){
        setRequest({ ...request,
            [e.target.name]: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            },
        })
    }*/

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
            {/*<Select 
                name="origin_id" 
                text="Selecione a Origem" 
                options={origins} 
                handleOnChange={handleSelect}
                value={request.origin_id ? request.origin_id.id : ''}
            />*/}
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
            <Input 
                type="text"
                text="Classe do DRE"
                name="class_dre"
                placeholder="Insira a classe do DRE"
                handleOnChange={handleChange}
                value={request.class_dre ? request.class_dre : ''}
            />
             <Input 
                type="text"
                text="Sub-classe do DRE"
                name="subclass_dre"
                placeholder="Insira a sub-classe do DRE"
                handleOnChange={handleChange}
                value={request.subclass_dre ? request.subclass_dre : ''}
            />
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