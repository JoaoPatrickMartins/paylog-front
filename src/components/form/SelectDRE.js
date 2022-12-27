import React from 'react'
import Select from 'react-select'

import styles from './Select.module.css'

function SelectOrigin ({ text, name, placeholder, handleSelectChange }){
    const options = [
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
        { value: 'Descontos', label: 'Descontos' },
        { value: 'Impostos e Contribuições Incidentes sobre Vendas', label: 'Impostos e Contribuições Incidentes sobre Vendas' },
        { value: 'Venda Mensal', label: 'Venda Mensal' }
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