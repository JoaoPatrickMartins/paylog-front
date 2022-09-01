import React from 'react'
import Select from 'react-select'

import styles from './Select.module.css'

function SelectOrigin ({ text, name, placeholder, handleSelectChange }){
    const options = [
        { value: 'Publicidade, Marketing e Incentivos', label: 'Publicidade, Marketing e Incentivos' },
        { value: 'Despesas Administrativas', label: 'Despesas Administrativas' },
        { value: 'Despesas Pessoais', label: 'Despesas Pessoais' },
        { value: 'Locação', label: 'Locação' },
        { value: 'Rei do Mate', label: 'Rei do Mate' },
        { value: 'Ri Happy Macaé', label: 'Ri Happy Macaé' },
        { value: 'Ri Happy Cachoeiro de Itapemirim', label: 'Ri Happy Cachoeiro de Itapemirim' },
        { value: 'Ri Happy Ubá', label: 'Ri Happy Ubá' },
        { value: 'Ri Happy Rio das Ostras', label: 'Ri Happy Rio das Ostras' },
        { value: 'Ri Happy Nova Friburgo', label: 'Ri Happy Nova Friburgo' },
        { value: 'Ri Happy Campos Dos Goytacazes', label: 'Ri Happy Campos Dos Goytacazes' },
        { value: 'Ri Happy Cabo Frio', label: 'Ri Happy Cabo Frio' },
        { value: 'Royalties Ri Happy', label: 'Royalties Ri Happy' },
        { value: 'Fundo de Propaganda Ri Happy', label: 'Fundo de Propaganda Ri Happy' },
        { value: 'Folha de Pagamento', label: 'Folha de Pagamento' },
        { value: 'Fornecedor', label: 'Fornecedor' },
        { value: 'Despesas Financeiras', label: 'Despesas Financeiras' },
        { value: 'DARF CSLL', label: 'DARF CSLL' },
        { value: 'DARF IRPJ', label: 'DARF IRPJ' },
        { value: 'Pró Labore', label: 'Pró Labore' },
        { value: 'Impostos e Contribuições Incidentes sobre Vendas', label: 'Impostos e Contribuições Incidentes sobre Vendas' }
      ]

      

    return (
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}</label>
            <Select 
                name={name}
                options={options}  
                placeholder={placeholder}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default SelectOrigin