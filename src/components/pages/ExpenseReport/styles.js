import styled from 'styled-components';

export const Styles = styled.section`
display: flex;
width: 100%;
margin: 2rem;
justify-content: center;

.containerReport {
    width: 450px;
    margin: 0 auto;
    padding: 3em;
}

.headerFormReport {
    margin-bottom: 2rem;
}

.headerFormReport p {
    color: #7B7B7B;
}

.formReportTitulo {
    border-left: 5px #9360BD solid;
}

.newrequest_container p {
    color: #7B7B7B;
}

.formReportTitulo h1 {
    margin-bottom: 1rem;
    margin-left: 1rem;
    color: #9360BD;
    
}

.report {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.report h1{
    text-align: center;
    color: #9360BD;
}


.table_report{
    display: flex;
    width: 100%;
}

.report_title {
    margin-bottom: 4rem;
    margin-top: 2rem;
}

.columns {
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    border: 2px #666666 solid;
    width: 100%;
    min-width:1150px;
}

.labelStartDate{
    margin-left: .5rem;
    color: #7B7B7B;
}

.input_start_data {
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-left: .5rem;
    margin-right: 2rem;
    padding: 0.7em;
    border-radius: 0.5em;
    border: 1px solid #c2c2c2;
    outline: none;
}

.labelEndDate {
    color: #7B7B7B;
}

.input_end_data {
    margin-bottom: 1rem;
    margin-left: .5rem;
    margin-right: .5rem;
    padding: 0.7em;
    border-radius: 0.5em;
    border: 1px solid #c2c2c2;
    outline: none;
}

.submitContainer{
    width: 100%;
    margin-top: 2rem;
}
 
.submitContainer button{
    display: flex;
    padding: .75rem 1rem .75rem 1rem;
    text-decoration: none;
    align-items: center;
    border-radius: 10rem;
    background-color: #9360BD;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    color: #fff;
    font-weight: bold;
    border: none;
    font-size: normal;
    width: 93%;
    max-height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    transition: 0.5s;
}

.submitContainer button:hover {
  opacity: 0.8;
}

.table_data_titulo{
    width: 12%;
    min-width:220px;
    
}

.table_data_class_dre{
    width: 30%;
    min-width:400px;
    
}

.table_data_subclasse_dre{
    width: 18%;
    min-width:280px;
    
}

.table_data_date{
    width: 5%;
    min-width:100px;
    
}

.table_data_value{
    width: 10%;
    min-width:150px;
    
}

.header{
    border: 1px #666666 solid;
    width: 100%;
}

.header p {
    font-weight: bolder;
    margin: .5rem;
    color: #666666;
}

.cell {
    border: 1px #666666 solid;
    width: 100%;
}

.cell p {
    margin: 0.5rem;
    color: #666666;
}

.total_expenses_container{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    color: red;
}

`