import { Styles } from './styles';

import { useState, useEffect, useContext } from "react"

import FilterSelect from '../../form/FilterSelect';

import { getRequests } from "../../../services/api"

import { AuthContext } from "../../../context/auth"

import SortNextDueDate from "../../../utilities/SortNextDueDate"


function ExpenseReport(){
    
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [visible, setVisible] = useState(true);
    const [origin, setOrigin] = useState('');
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const query = '';
    const [nameCompany, setNameCompany] = useState('');
    

    const loadData = async(querySelect) => {
        try {
            if(querySelect !== ''){
                const response = await getRequests(user?.id,querySelect);
                const arr = response.data;
                setRequests(SortNextDueDate(arr));
                //console.log(requests)
                
                //setLoading(false);
            }else{
                const response = await getRequests(user?.id,query);
                const arr = response.data;
                setRequests(SortNextDueDate(arr));
                //setLoading(false);
            }
            
        } catch (err) {
            //setLoadingError(true);
        }

        
    }

    useEffect( () => {
        (async () => await loadData())();
    }, []);


      const optionOrigin = [
        { value: 'Banco', label: 'Banco' },
        { value: 'Caixa', label: 'Caixa' }, 
      ]

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


      const handleCompany = (event) => {
        setCompany(`&company=${event.value}`);
        setNameCompany(event.value);
    }

    const handleOrigin = (event) => {
        setOrigin(`&origin_id=${event.value}`);
    }

    
    const handleStartDate = (event) =>{
        let data = `&start_date=${event.target.value}`;
        setStartDate(data)
    }
    const handleEndDate = (event) =>{
        let data = `&end_date=${event.target.value}`;
        setEndDate(data)
    }

    const submit = async(e) => {
        e.preventDefault()
        setVisible(false)
        await loadData(`${company}${origin}${startDate}${endDate}`);
    }

    return(
        <Styles>
            {visible ? (
                <div className='containerReport'>
                    <div className='headerFormReport'>
                        <div className='formReportTitulo'>
                            <h1>Gerar Relatório de Despesas</h1>
                        </div>
                        <p>Gere um Relatório com as Informações Desejadas.  </p>
                    </div>
                    <form onSubmit={submit}>
                        <FilterSelect 
                            option={optionCompany}
                            name='company' 
                            placeholder='Empresa'
                            handleSelectChange={handleCompany}
                        />

                        <FilterSelect 
                            option={optionOrigin}
                            name='origin_id' 
                            placeholder='Origem'
                            handleSelectChange={handleOrigin}
                        />

                        <label className='labelStartDate' htmlFor={"start_date"}>{"Inicio: "}</label>
                        <input className="input_start_data"
                            type="date"
                            name="start_date"
                            placeholder="Data de Inicio"
                            onChange={handleStartDate}
                        
                        />

                        <label className='labelEndDate' htmlFor={"end_date"}>{"Fim: "}</label>
                        <input className="input_end_data"
                            type="date"
                            name="end_date"
                            placeholder="Data de Fim"
                            onChange={handleEndDate}
                                                
                        />
                        <div className='submitContainer'>
                            <button>Gerar</button>
                        </div>                   
                    </form>
                </div>
            ):(
                <div className='report'>
                    <div className='report_title'>
                        <h1>Relario de Despesas {nameCompany} </h1>
                    </div>
                    <div className='table_report'>
                        <div className='columns'>
                            <div className='table_data_titulo'>
                                <div  className='header'>
                                    <p>Titulo</p>
                                </div>
                                    {requests.length > 0 &&
                                        requests.map((request) => (
                                            <div className='cell'>
                                                <p>{request.title}</p>
                                            </div>
                                        ))
                                    }
                            </div>
                            <div className='table_data_class_dre'>
                                <div  className='header'>
                                    <p>Classe DRE</p>
                                </div>
                                    {requests.length > 0 &&
                                        requests.map((request) => (
                                            <div className='cell'>
                                                <p>{request.class_dre}</p>
                                            </div>
                                            
                                        ))
                                    }
                            </div>
                            <div className='table_data_subclasse_dre'>
                                <div  className='header'>
                                    <p>Subclasse DRE</p>
                                </div>
                                    {requests.length > 0 &&
                                        requests.map((request) => (
                                            <div className='cell'>
                                                {(request.subclass_dre === " ") ? (<p>Sem Subclasse</p>):(<p>{request.subclass_dre}</p>) }
                                            </div>
                                        ))
                                    }
                            </div>
                            <div className='table_data_date'>
                                <div  className='header'>
                                    <p>Data</p>
                                </div>
                                    {requests.length > 0 &&
                                        requests.map((request) => (
                                            <div className='cell'>
                                                <p>{request.request_date.split("-").reverse().join("/")}</p>
                                            </div>
                                        ))
                                    }
                            </div>
                            <div className='table_data_value'>
                                <div  className='header'>
                                    <p>Valor</p>
                                </div>
                                    {requests.length > 0 &&
                                        requests.map((request) => (
                                            <div className='cell'>
                                                <p>{request.value}</p>
                                            </div>
                                        ))
                                    }
                            </div>
                        </div>
                    </div>
                </div>

            )}
           
        </Styles>
                    
    )
}

export default ExpenseReport