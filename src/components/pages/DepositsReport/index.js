import { Styles } from './styles';

import { useState, useEffect, useContext } from "react"

import FilterSelect from '../../form/FilterSelect';

import { getDeposits } from '../../../services/api'

import { AuthContext } from "../../../context/auth"

import SortDate from "../../../utilities/SortDate"

import { AddValue } from '../../../utilities/AddValue'


function DepositsReport(){

    const { user } = useContext(AuthContext);
    const [deposits, setDeposits] = useState([]);
    const [visible, setVisible] = useState(true);
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [msgErr, setMsgErr] = useState(false);
    const [nameCompany, setNameCompany] = useState('');
    const query = '';

    const loadData = async(querySelect) => {
        try {
            if(querySelect !== ''){
                const response = await getDeposits(user?.id,querySelect);
                const arr = response.data;
                setDeposits(SortDate(arr,'deposit'));

                //setLoading(false);
            }else{
                const response = await getDeposits(user?.id,query);
                const arr = response.data;
                setDeposits(SortDate(arr,'deposit'));

                //setLoading(false);
            }
        } catch (err) {
            //setLoadingError(true);
        }
        
    }


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
        if((company !== '') && (startDate !== '') && (endDate !== '')){
            setVisible(false)
            await loadData(`${company}${startDate}${endDate}`);
        } else{
            setMsgErr(true)
        }
    }

    const onclickButton = async (e) => {
        e.preventDefault();
        setVisible(true);
    }
    

    return(
        <Styles>
            {visible ? (
                <div className='containerReport'>
                    <div className='headerFormReport'>
                        <div className='formReportTitulo'>
                            <h1>Relatório de Depósitos</h1>
                        </div>
                        <p>Gere o Relatório da empresa e mês desejado.</p>
                    </div>
                    <form onSubmit={submit}>
                        <FilterSelect 
                            option={optionCompany}
                            name='company' 
                            placeholder='Empresa'
                            handleSelectChange={handleCompany}
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
                            {msgErr && (<p>Preencha todos os campos!</p>)}
                        </div>                   
                    </form>
                </div>
            ):(
                <diV className='deposit_report' >
                    
                    <div className='button_container'>
                       <button className='btn' onClick={onclickButton}>Novo Relatório</button>
                    </div>


                    <div className='report_title'>
                        <h1>Relatório de Depósitos {nameCompany} </h1>
                    </div>

                    <div className='total_deposits_container'>
                            <h3>Total: {AddValue(deposits).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                    </div>

                    <div className='list_container'>
                        <ul>
                            <li className='header_table'>
                                <div className='date_container'>
                                    <h4>Data</h4>
                                </div>
                                <div className='value_container'>
                                    <h4>Valor</h4>
                                </div>
                                <div className='name_container'>
                                    <h4>Depositante</h4>
                                </div>
                            </li>
                            {deposits.length > 0 &&
                                        deposits.map((deposit) => (
                                            <li>
                                                <div className='date_container'>
                                                    <p>{deposit.depositDate.split("-").reverse().join("/")}</p>
                                                </div>
                                                <div className='value_container'>
                                                    <p>{Number.parseFloat(deposit.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                                </div>
                                                <div className='name_container'>
                                                    <p>{deposit.depositorName}</p>
                                                </div>
                                            </li>
                                        ))
                             }
                            
                        </ul>                        
                    </div>
                </diV>
            )}
            
        </Styles>
        
    )
}

export default DepositsReport