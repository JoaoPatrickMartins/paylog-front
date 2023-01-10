import { Styles } from './styles';

import { useState, useEffect, useContext } from "react"

import { getDeposits } from '../../../services/api'

import { AuthContext } from "../../../context/auth"

import SortDate from "../../../utilities/SortDate"

import DepositCard from "../../deposit/DepositCard"

import Loading from "../../layout/Loading/index"

import FilterSelect from '../../form/FilterSelect';

function ViewDeposits(){
    
    const { user } = useContext(AuthContext);
    const [deposits, setDeposits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startDateValue, setStartDateValue] = useState('');
    const [endDateValue, setEndDateValue] = useState('');
    const query = '';

    const [page, setPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = page * ITEMS_PER_PAGE;

    const paginatedItems = deposits.slice(startIndex, endIndex);


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



    const loadData = async(querySelect) => {
        try {
            if(querySelect !== ''){
                const response = await getDeposits(user?.id,querySelect);
                const arr = response.data;
                setDeposits(SortDate(arr,'deposit'));

                setLoading(false);
            }else{
                const response = await getDeposits(user?.id,query);
                const arr = response.data;
                setDeposits(SortDate(arr,'deposit'));

                setLoading(false);
            }
        } catch (err) {
            //setLoadingError(true);
        }
        
    }

    useEffect( () => {
        (async () => await loadData())();
    }, []);

    const handleCompany = (event) => {
        setCompany(`&company=${event.value}`);
    }
    
    const handleStartDate = (event) =>{
        let data = `&start_date=${event.target.value}`;
        setStartDate(data)
        setStartDateValue(event.target.value)
    }
    const handleEndDate = (event) =>{
        let data = `&end_date=${event.target.value}`;
        setEndDate(data)
        setEndDateValue(event.target.value)
    }

    const submit = async(e) => {
        e.preventDefault()
        if((company !== '') || (startDate !== '') || (endDate !== '')){
            setLoading(true)
            await loadData(`${company}${startDate}${endDate}`);
            
        } else{
            setLoading(true)
            await loadData();
        }
    }


    return(
        <Styles>

            {!loading ? (
                <div className='view_deposits_container'>
                    <div className='header_view_deposit'>
                        <div className='form_view_deposit_title'>
                            <h1>Histórico de Depósitos</h1>
                        </div>
                        <p>Selecione o período para visualizar o Histórico de depósitos desejado.</p>
                    </div>
                    <form onSubmit={submit}>
                        {((user.permission === 'admin') || (user.permission === 'supervisor')) && (
                            <FilterSelect 
                                option={optionCompany}
                                name='company' 
                                placeholder='Empresa'
                                handleSelectChange={handleCompany}
                            />
                        )}
                        <div className='date_form_container'>
                            <div className='input_container'>
                            <label className='labelStartDate' htmlFor={"start_date"}>{"Inicio: "}</label>
                            <input className="input_start_data"
                                type="date"
                                name="start_date"
                                placeholder="Data de Inicio"
                                onChange={handleStartDate}
                                value={startDateValue ? startDateValue : ''}
                            />
                            </div>

                            <div className='input_container'>
                            <label className='labelEndDate' htmlFor={"end_date"}>{"Fim: "}</label>
                            <input className="input_end_data"
                                type="date"
                                name="end_date"
                                placeholder="Data de Fim"
                                onChange={handleEndDate}
                                value={endDateValue ? endDateValue : ''}      
                            />
                            </div>
                        </div>

                        <div className='submitContainer'>
                            <button>Buscar</button>
                        </div>                   
                    </form>
                    <div className='list_container'>
                        <ul>
                            {paginatedItems.length > 0 &&
                                paginatedItems.map((item, index) => (
                                    <div key={index} className='card_container'>
                                        <DepositCard user={user} forSetdeposit={item} setLoading={setLoading} loadDeposits={loadData} />
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='navigation_button_container'>
                        {(page !== 1) ? (
                            <button className='navigation_button' onClick={(e) =>{ 
                                e.preventDefault()
                                setLoading(true)
                                 setPage(page - 1)
                                 setTimeout(() => {
                                    setLoading(false)
                                  }, 300);
                            }}>Anterior</button>
                        ):(<div></div>)}
                        
                        <button className='navigation_button' onClick={(e) => {
                            e.preventDefault()
                            setLoading(true)
                            setPage(page + 1)
                            setTimeout(() => {
                                setLoading(false)
                              }, 300);
                            console.log(paginatedItems)
                        }}>Próximo</button>
                    </div>
                </div>
            ):(
                <div  className='view_deposits_container'>
                    {loading && <Loading />}
                </div>
            )}
            
        </Styles>
        
        
    )
}

export default ViewDeposits