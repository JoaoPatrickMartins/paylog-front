import styled from 'styled-components';

export const Styles = styled.section`
display: flex;
width: 100%;
margin: 2rem;
justify-content: center;


.header_view_deposit {
    margin-left: .5rem;
    margin-bottom: .5rem;
}

.header_view_deposit p {
    color: #7B7B7B;
}

.form_view_deposit_title {
    border-left: 5px #9360BD solid;
}

.form_view_deposit_title h1 {
    margin-bottom: 1rem;
    margin-left: 1rem;
    color: #9360BD;
    
}

.date_form_container{
    display: flex;
    justify-content: space-between ;
}


.labelStartDate{
    color: #7B7B7B;
    margin-right: .3rem;

}

.input_start_data {
    margin-top: .5rem;
    margin-bottom: 1rem;
    padding: 0.7em;
    border-radius: 0.5em;
    border: 1px solid #c2c2c2;
    outline: none;
}

.labelEndDate {
    color: #7B7B7B;
    margin-right: .3rem;
}

.input_end_data {
    margin-top: .5rem;
    margin-bottom: 1rem;
    padding: 0.7em;
    border-radius: 0.5em;
    border: 1px solid #c2c2c2;
    outline: none;
}


.submitContainer{
    width: 100%;
}

.submitContainer p{
    margin-top: 1rem;
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
    transition: 0.5s;
}

.submitContainer button:hover {
  opacity: 0.8;
}

.view_deposits_container{
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 380px;
}

.list_container{
    width: 100%;
    display:flex;
    border: #fff ridge;
    background-color: #B38FD2;
    margin-top: 2rem;
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

.list_container p{
    font-size: smaller;
    color: #666666;
}

`