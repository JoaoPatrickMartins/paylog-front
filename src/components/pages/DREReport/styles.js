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

.submitContainer p{
    margin-top: .5rem;
    text-align: center;
    color: red;
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


.dre_report {
    display: flex;
    flex-direction: column;
    width: 60%;
}

.dre_report h1{
    text-align: center;
    color: #9360BD;
}

.dre_report_title {
    margin-bottom: 4rem;
    margin-top: 2rem;
}

.container_list_dre_report{
    width: 100%;
    display:flex;
    border: #fff ridge;
    background-color: #B38FD2;
}

ul{
    width: 100%;
    display:flex;
    flex-direction: column;
    list-style: none; 
    justify-content: center;
    align-items: center;
    margin-top: .3rem;
    margin-bottom: .2rem;
}

li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: .7vh;
    padding-top: 1vh;
    border: #fff ridge;
    width: 95%;
    height: 100%;
    background-color: #EBE2F3
}

.featured_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: .7vh;
    padding-top: 1vh;
    border: #fff ridge;
    width: 95%;
    height: 100%;
    background-color: #B38FD2;
}

.featured_container_result{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: .7vh;
    padding-top: 1vh;
    border: #fff ridge;
    width: 95%;
    height: 100%;
    background-color: #9360BD;
}

li p{
    margin-left: 1rem;
    
}

.container_item{
    width: 55%;
    border-right: #fff ridge;
}

.container_value{
    width: 30%;
    text-align: center;
}

.container_percentage_value{
    width: 10%;
    text-align: center;
    border-left: #fff ridge;
}



`