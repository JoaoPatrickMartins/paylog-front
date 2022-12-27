import { Container } from "./styles";

import { useState } from 'react'

import { IoFunnel } from "react-icons/io5"

import FilterSelect from "../../form/FilterSelect";

export default function FilterBar ({ loadData }){

    const [origin, setOrigin] = useState('');
    const [company, setCompany] = useState('');
    const [classDRE, setClassDRE] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [visible, setVisible] = useState(true);

    const optionClassDRE = [
        { value: 'Publicidade, Marketing e Incentivos', label: 'Publicidade, Marketing e Incentivos' },
        { value: 'Despesas Administrativas', label: 'Despesas Administrativas' },
        { value: 'Despesas Pessoais', label: 'Despesas Pessoais' },
        { value: 'Locação', label: 'Locação' },
        { value: 'Movimentação Bancária', label: 'Movimentação Bancária' },
        { value: 'Royalties Ri Happy', label: 'Royalties Ri Happy' },
        { value: 'Fundo de Propaganda Ri Happy', label: 'Fundo de Propaganda Ri Happy' },
        { value: 'Folha de Pagamento', label: 'Folha de Pagamento' },
        { value: 'Fornecedor', label: 'Fornecedor' },
        { value: 'Despesas Financeiras', label: 'Despesas Financeiras' },
        { value: 'DARF CSLL', label: 'DARF CSLL' },
        { value: 'DARF IRPJ', label: 'DARF IRPJ' },
        { value: 'Pró Labore', label: 'Pró Labore' },
        { value: 'Impostos e Contribuições Incidentes sobre Vendas', label: 'Impostos e Contribuições Incidentes sobre Vendas' },
        { value: 'Venda Mensal', label: 'Venda Mensal' }
      ]

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

        const handleClassDRE = (event) => {
            setClassDRE(`&class_dre=${event.value}`);
        }

        const submit = async(e) => {
            e.preventDefault()
            await loadData(`${company}${origin}${startDate}${endDate}${classDRE}`);
            setVisible(true);
            setClassDRE('');
            setCompany('');
            setEndDate('');
            setStartDate('');
            setOrigin('');
        }

        const clearQuery = async (e) => {
            e.preventDefault();
            console.log('')
            await loadData('');
            setClassDRE('');
            setCompany('');
            setEndDate('');
            setStartDate('');
            setOrigin('');
            setVisible(true);
        }

        const onclickButton = async (e) => {
            e.preventDefault();
            setVisible(false);
        }

    return(
        <Container>
            <>
                {visible ? (
                    <div className="buttonFiltro">
                        <button onClick={onclickButton} >
                            <div className="iconContainer">
                                <IoFunnel />
                            </div>
                        </button>
                    </div>
                ) : (
                    <div className="filterContainer">
                        <p>Filtrar por:</p>
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

                            <label className="labelStartDate" htmlFor={"start_date"}>{"Inicio: "}</label>
                            <input className="input_start_data"
                                type="date"
                                name="start_date"
                                placeholder="Data de Inicio"
                                onChange={handleStartDate}
                            />

                            <label className="labelEndDate" htmlFor={"end_date"}>{"Fim: "}</label>
                            <input className="input_end_data"
                                type="date"
                                name="end_date"
                                placeholder="Data de Fim"
                                onChange={handleEndDate}
                                
                            />

                            <FilterSelect 
                                option={optionClassDRE} 
                                name='class_dre' 
                                placeholder='Classe do DRE'
                                handleSelectChange={handleClassDRE}
                            />
                            <div className="buttonContainer">
                                <button>Filtrar</button>
                                <button onClick={clearQuery}>limpar</button>
                            </div>
                        </form>
                    </div>
                )}
            </>
        </Container>
    )
}