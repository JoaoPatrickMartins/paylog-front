import styled, { css } from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fafafa;
    border-radius: 1em;
    width: 18.85%;
    min-width: 230px;
    margin: .5%;
    border: 1px #C2C2C2 solid;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        
    border-top: 5px #ffd252 solid;


.title_card_container{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: .8rem;
    margin-top: .5rem;   
    cursor: pointer; 
}

.info_container{
    cursor: pointer;
}

.request_card h4 {
    color: #525252;
    border-radius: 1em;
    font-size: 1.3em;
    margin-left: .5rem;
}


.request_card p {
    color: #666666;
    margin: .2em;
    margin-left: 1em;
    margin-right: 1em;

}

.request_card p span {
    font-weight: bold;
}

.request_card_actions {
    margin-top: 1.2rem;
    display: flex;            
}   

.request_card_actions a,
.request_card_actions button{
    text-decoration: none;
    border: none;
    color: #666666;
    border-top: 1.5px solid #C2C2C2 ;
    font-size: 0.9em;
    padding: 0.6em 1em;
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    transition: .1s;
    cursor: pointer;
}

.request_card_actions button{
    background-color: #fafafa;
    border-left: 1.5px solid #C2C2C2 ;
    border-radius: 0 0 1rem 0;
}
.request_card_actions a{
    background-color: #fafafa;
    border-radius: 0 0 0 1rem;
}

.request_card_actions svg {
    margin-right: .5em;
}

.request_card_actions a:hover,
.request_card_actions button:hover{
    color: #666666;
    background-color: #EBEBEB;
}

${({ status }) => ( status === 'Aprovado') && css`  
    border-top: 5px #3bb659 solid;
`}

${({ status }) => ( status === 'Reprovado') && css`  
    border-top: 5px #b9453a solid;
`}

`