import styled from 'styled-components';

export const Styles = styled.section`
 width: 100%;
display:flex;
flex-direction: column;
list-style: none; 
justify-content: center;
align-items: center;


li{
    align-items: center;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: .7vh;
    padding-top: 1vh;
    border: #fff ridge;
    width: 90%;
    height: 100%;
    background-color: #EBE2F3
}

.manipulation_button_container{
    display: flex;
    justify-content: flex-end;
}


.btn{
    text-align: end;
    text-decoration: none;
    min-width: 25px;
    min-height: 25px;
    border: none;
    background-color: #EBE2F3;
    color: #9360BD;
    cursor: pointer;
    font-size: 1s;
}

.btn svg:hover {
    font-size: large;
}

.btn svg {
    font-size: larger;
}
.central_container{
    display: flex;
    justify-content: space-between;
    min-height: 70px;
}

.central_container h2,
.central_container h4{
    color:  #9360BD;
}

.list_container p{
    font-size: smaller;
    color: #666666;
}

.depositor_info_container{
    width: 40%;
}

.date_container{
    display: flex;
    justify-content: flex-end;
    font-size: small;
}

.value_container{
    width: 60%;
    text-align: end;
   
}

.submit_container{
    display: flex;
    width: 100%;
    justify-content: center;
}

.submit_button{
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
    width: 90%;
    max-height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: 0.5s;
  
}

.submit_button:hover {
  opacity: 0.8;
}
.submit_button svg{
    font-size: x-large;
    margin-right: .5vw;
}

.msg_container p{
    color: red;
}

`