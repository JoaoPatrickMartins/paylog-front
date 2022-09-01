export const OptionsForSelect =(option) => {

    const option1 = [
        { value: 'Artes Publicitárias', label: 'Artes Publicitárias' },
        { value: 'testPromoções na Loja', label: 'Promoções na Loja' },
        { value: 'Funcionário do Mês', label: 'Funcionário do Mês' },
        { value: 'Incentivo Meta Batida', label: 'Incentivo Meta Batida' },
        { value: 'Delivery', label: 'Delivery' },
        { value: 'Treinamento de Vendas', label: 'Treinamento de Vendas' },
        { value: 'Diversos', label: 'Diversos' }
      ]

    const option2 = [
        { value: 'Informática', label: 'Informática' },
        { value: 'Airus', label: 'Airus' },
        { value: 'Pleno', label: 'Pleno' },
        { value: 'Contador', label: 'Contador' },
        { value: 'Internet', label: 'Internet' },
        { value: 'Firjan', label: 'Firjan' },
        { value: 'Ecad', label: 'Ecad' },
        { value: 'Telefonia Móvel (Claro)', label: 'Telefonia Móvel (Claro)' },
        { value: 'Limpeza', label: 'Limpeza' },
        { value: 'Alimentação', label: 'Alimentação' },
        { value: 'Papelaria', label: 'Papelaria' },
        { value: 'Diversos', label: 'Diversos' }
      ]

    const option3 = [
        { value: 'Aluguel Loja', label: 'Aluguel Loja' },
        { value: 'Condomínio', label: 'Condomínio' },
        { value: 'Energia Elétrica', label: 'Energia Elétrica' },
        { value: 'Fundo de Promoção', label: 'Fundo de Promoção' }               
      ]

    const option4 = [
        { value: 'Salário', label: 'Salário' },
        { value: 'Rescisão', label: 'Rescisão' },
        { value: 'Multa FGTS Rescisão', label: 'Multa FGTS Rescisão' },
        { value: 'Férias', label: 'Férias' },
        { value: 'FGTS', label: 'FGTS' },
        { value: 'INSS/GPS', label: 'INSS/GPS' },
        { value: 'INSS/GPS SMART BRINQUEDOS', label: 'INSS/GPS SMART BRINQUEDOS' },
        { value: 'Funcionários Extras', label: 'Funcionários Extras' },
        { value: 'Plano Dental', label: 'Plano Dental' }
      ]
    const option5 = [
        { value: 'Pendências de Mora', label: 'Pendências de Mora' },
        { value: 'Tarifa Bancária', label: 'Tarifa Bancária' },
        { value: 'Taxas e Juros', label: 'Taxas e Juros' },
        { value: 'Taxa de cartão de Crédito', label: 'Taxa de cartão de Crédito' },
        { value: 'Adiantemanto de Cartão', label: 'Adiantemanto de Cartão' },
        { value: 'Empréstimo 01', label: 'Empréstimo 01' },
        { value: 'Consórcio Banco', label: 'Consórcio Banco' }               
      ]
    const option6 = [
        { value: 'Simples Nacional', label: 'Simples Nacional' },
        { value: 'PIS', label: 'PIS' },
        { value: 'COFINS', label: 'COFINS' },
        { value: 'ICMS', label: 'ICMS' },
        { value: 'FECP/RJ', label: 'FECP/RJ' },
        { value: 'DARF', label: 'DARF' },
        { value: 'DAS LS DOS SANTOS', label: 'DAS LS DOS SANTOS' }
      ]

      const option7 = [
        { value: 'Aplhaville ', label: 'Aplhaville ' },
        { value: 'Amil', label: 'Amil' },
        { value: 'Banco do Brasil', label: 'Banco do Brasil' },
        { value: 'IPTV', label: 'IPTV' },
        { value: 'Brasil Prev', label: 'Brasil Prev' },
        { value: 'Buriti', label: 'Buriti' },
        { value: 'BV', label: 'BV' },
        { value: 'Cartão', label: 'Cartão' },
        { value: 'Bariloche', label: 'Bariloche' },
        { value: 'Castelo', label: 'Castelo' },
        { value: 'Clube de Tiro', label: 'Clube de Tiro' },
        { value: 'Combustível', label: 'Combustível' },
        { value: 'Costa Bela', label: 'Costa Bela' },
        { value: 'Curso', label: 'Curso' },
        { value: 'DARF', label: 'DARF' },
        { value: 'Despachante', label: 'Despachante' },
        { value: 'Diversos', label: 'Diversos' },
        { value: 'Doação', label: 'Doação' },
        { value: 'Empregada', label: 'Empregada' },
        { value: 'Emprestimo', label: 'Emprestimo' },
        { value: 'Ibiza', label: 'Ibiza' },
        { value: 'Igreja', label: 'Igreja' },
        { value: 'Internet', label: 'Internet' },
        { value: 'IPTU', label: 'IPTU' },
        { value: 'IPVA', label: 'IPVA' },
        { value: 'Livros', label: 'Livros' }
      ]

    switch(option){
        case 'Publicidade, Marketing e Incentivos': return option1
        case 'Despesas Administrativas': return option2
        case 'Locação': return option3
        case 'Folha de Pagamento': return option4
        case 'Despesas Financeiras': return option5
        case 'Impostos e Contribuições Incidentes sobre Vendas': return option6
        case 'Despesas Pessoais': return option7
        default:
    }

      return option
}

