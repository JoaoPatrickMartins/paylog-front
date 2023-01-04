import { Styles } from './styles';

import { useState, useEffect, useContext } from "react"

import FilterSelect from '../../form/FilterSelect';

import { getRequests } from "../../../services/api"

import { AuthContext } from "../../../context/auth"

import SortDate from "../../../utilities/SortDate"

import { AddValue } from '../../../utilities/AddValue'

import { FilterClassDRE } from '../../../utilities/FilterClassDRE'

function DREReport(){

    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
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
                const response = await getRequests(user?.id,querySelect);
                const arr = response.data;
                setRequests(SortDate(arr,'request'));

                //setLoading(false);
            }else{
                const response = await getRequests(user?.id,query);
                const arr = response.data;
                setRequests(SortDate(arr,'request'));

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
    

    function calcDeductionsGR (){
        let taxes = AddValue(FilterClassDRE(requests, 'Impostos e Contribuições Incidentes sobre Vendas'))
        let discounts = AddValue(FilterClassDRE(requests, 'Descontos'))

        let result = -taxes-discounts;

        return result
    }

    function calcNetOpR (){
        let grossOpR = AddValue(FilterClassDRE(requests, 'Venda Mensal'))
        let deductionsGR = calcDeductionsGR ()

        let result = grossOpR+deductionsGR;

        return result
    }

    function calcGrossOpIn (){
        let netOpR = calcNetOpR()
        let cOGS = AddValue(FilterClassDRE(requests, 'Fornecedor'))

        let result = netOpR-cOGS;

        return result
    }

    function calcOpFinExpenses (){

        let result = -(AddValue(FilterClassDRE(requests, 'Publicidade, Marketing e Incentivos')))
                    -(AddValue(FilterClassDRE(requests, 'Despesas Administrativas')))
                    -(AddValue(FilterClassDRE(requests, 'Locação')))
                    -(AddValue(FilterClassDRE(requests, 'Royalties Ri Happy')))
                    -(AddValue(FilterClassDRE(requests, 'Fundo de Propaganda Ri Happy')))
                    -(AddValue(FilterClassDRE(requests, 'Folha de Pagamento')))
                    -(AddValue(FilterClassDRE(requests, 'Despesas Financeiras')));

        return result
    }

    function calcOpInBeforeIrCsll (){
        let opFinExpenses = calcOpFinExpenses()
        let grossOpIn = calcGrossOpIn()

        let result = opFinExpenses+grossOpIn;

        return result
    }

    function calcProvisionIrCsll (){

        let result = -(AddValue(FilterClassDRE(requests, 'DARF CSLL')))-(AddValue(FilterClassDRE(requests, 'DARF IRPJ')));

        return result
    }

    function calcNetInBefParticipation (){
        let opInBeforeIrCsll = calcOpInBeforeIrCsll()
        let provisionIrCsll = calcProvisionIrCsll()

        let result = opInBeforeIrCsll+provisionIrCsll;

        return result
    }

    function calcNetIncomeYear (){
        let netInBefParticipation = calcNetInBefParticipation()
        let proLabore = AddValue(FilterClassDRE(requests, 'Pró Labore'))

        let result = netInBefParticipation-proLabore;

        return result
    }

    function percentageRevenue (x){
        let grossOpR = AddValue(FilterClassDRE(requests, 'Venda Mensal'))
        x= parseInt(x)

        if(x<0){
            x = (-1)*x
        }

        if(x===0){
            return 0
        } else {
            let result = (x/grossOpR)*100;

            return result.toFixed(2)
        }
        
    }



    const onclickButton = async (e) => {
        e.preventDefault();
        setVisible(true);
    }

    const submit = async(e) => {
        e.preventDefault()
        if((company !== '') && (startDate !== '') && (endDate !== '')){
            setVisible(false)
            await loadData(`${company}${startDate}${endDate}&status=Aprovado`);
        } else{
            setMsgErr(true)
        }
        
        
    }

    return(
        <Styles>
            {visible ? (
                <div className='containerReport'>
                    <div className='headerFormReport'>
                        <div className='formReportTitulo'>
                            <h1>Demonstração do Resultado do Exercício</h1>
                        </div>
                        <p>Gere o DRE da empresa e mês desejado.</p>
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
                <div className='dre_report'>

                    <div className='button_container'>
                       <button className='btn' onClick={onclickButton}>Novo Relatório</button>
                    </div>
                    
                    <div className='dre_report_title'>
                        <h1>Demonstração do Resultado do Exercício - {nameCompany} </h1>
                    </div>
                    
                    <div className='container_list_dre_report'>
                        <ul >
                            <li className='featured_container_result'>
                                <div className='container_item'>
                                    <h4>Receita Operacional Bruta</h4>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Venda Mensal')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Venda Mensal')))}%</p></div>
                            </li>
                            
                            <li className='featured_container'>
                                <div className='container_item'>
                                    <h4>( - ) Deduções da Receita Bruta </h4>
                                </div>
                                <div className='container_value'><p>{calcDeductionsGR().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(calcDeductionsGR())}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Impostos e Contribuições Incidentes sobre Vendas</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Impostos e Contribuições Incidentes sobre Vendas')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Impostos e Contribuições Incidentes sobre Vendas')))}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Descontos</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Descontos')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Descontos')))}%</p></div>
                            </li>

                            <li className='featured_container_result'>
                                <div className='container_item'>
                                    <h4>= Receita Operacional Líquida</h4>
                                </div>
                                <div className='container_value'><p>{calcNetOpR().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(calcNetOpR())}%</p></div>
                            </li>

                            <li className='featured_container'>
                                <div className='container_item'>
                                    <h4>( - ) Custos das Vendas (CMV)</h4>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Fornecedor')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Fornecedor')))}%</p></div>
                            </li>

                            <li className='featured_container_result'>
                                <div className='container_item'>
                                    <h4>= Resultado Operacional Bruto</h4>
                                </div>
                                <div className='container_value'><p>{calcGrossOpIn().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(calcGrossOpIn())}%</p></div>
                            </li>

                            <li className='featured_container'>
                                <div className='container_item'>
                                    <h4>( - ) Despesas Operacionais e Financeiras</h4>
                                </div>
                                <div className='container_value'><p>{calcOpFinExpenses().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(calcOpFinExpenses())}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Publicidade, Marketing e Incentivos</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Publicidade, Marketing e Incentivos')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Publicidade, Marketing e Incentivos')))}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Despesas Administrativas</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Despesas Administrativas')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Despesas Administrativas')))}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Locação</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Locação')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Locação')))}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Royalties Ri Happy</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Royalties Ri Happy')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Royalties Ri Happy')))}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Fundo de Propaganda Ri Happy</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Fundo de Propaganda Ri Happy')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Fundo de Propaganda Ri Happy')))}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Folha de Pagamento</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Folha de Pagamento')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Folha de Pagamento')))}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Despesas Financeiras</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Despesas Financeiras')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Despesas Financeiras')))}%</p></div>
                            </li>

                            <li className='featured_container_result'>
                                <div className='container_item'>
                                    <h4>= Resultado Operacional Antes do IR e CSLL</h4>
                                </div>
                                <div className='container_value'><p>{calcOpInBeforeIrCsll().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(calcOpInBeforeIrCsll())}%</p></div>
                            </li>

                            <li className='featured_container'>
                                <div className='container_item'>
                                    <h4>( - ) Provisão para IR e CSLL</h4>
                                </div>
                                <div className='container_value'><p>{calcProvisionIrCsll().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(calcProvisionIrCsll())}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>DARF CSLL</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'DARF CSLL')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'DARF CSLL')))}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>DARF IRPJ</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'DARF IRPJ')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'DARF IRPJ')))}%</p></div>
                            </li>

                            <li className='featured_container_result'>
                                <div className='container_item'>
                                    <h4>= Lucro Líquido Antes das Participações</h4>
                                </div>
                                <div className='container_value'><p>{calcNetInBefParticipation().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(calcNetInBefParticipation())}%</p></div>
                            </li>

                            <li>
                                <div className='container_item'>
                                    <p>Pró Labore</p>
                                </div>
                                <div className='container_value'><p>{AddValue(FilterClassDRE(requests, 'Pró Labore')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(AddValue(FilterClassDRE(requests, 'Pró Labore')))}%</p></div>
                            </li>

                            <li className='featured_container_result'>
                                <div className='container_item'>
                                    <h4>( = ) Resultado Líquido do Exercício</h4>
                                </div>
                                <div className='container_value'><p>{calcNetIncomeYear().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                                <div className='container_percentage_value' ><p>{percentageRevenue(calcNetIncomeYear())}%</p></div>
                            </li>
                        </ul>
                    </div>
                </div>

            )}
           
        </Styles>
        
    )
}

export default DREReport