import styled, { css } from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    text-align: center;
    color: #525252;
    flex-wrap: wrap;
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

.button_approved, .button_disapproved{
    text-decoration: none;
    border: none;
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

.button_disapproved{
    color: #b9453a;
    background-color: #fafafa;
    border-radius: 0 0 1rem 0;
}

.button_approved{
    color: #3bb659;
    background-color: #fafafa;
    border-radius: 0 0 0 1rem;
    border-right: 1.5px solid #C2C2C2;
}

.button_file{
    width: 100%;
    background-color: #fafafa;
    text-decoration: none;
    border: none;
    color: #666666;
    border-top: 1.5px solid #C2C2C2 ;
    border-radius: 0 0 1rem 1rem;
    font-size: 0.9em;
    padding: 0.6em 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .1s;
    cursor: pointer;
}

.button_file:hover{
    color: #666666;
    background-color: #EBEBEB;
}

.button_approved:hover{
    color: #3bb659;
    background-color: #C1EBCB;
    border-radius: 0 0 0 1rem;
}

.button_disapproved:hover{
    color: #b9453a;
    background-color: #EBC5C1;
}

.request_card_actions svg {
    margin-right: .5em;
}

.request_card_actions_none{
    margin-bottom: 1rem ;
}

${({ status }) => ( status === 'Aprovado') && css`  
    border-top: 5px #3bb659 solid;
`}

${({ status }) => ( status === 'Reprovado') && css`  
    border-top: 5px #b9453a solid;
`}

`