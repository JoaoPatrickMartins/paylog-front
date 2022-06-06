import styled, { css } from 'styled-components';

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 0;
    height: 0;
    margin-top: 8vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;

    background: #c918a1;
    background: linear-gradient(90deg, #c918a1 0%, #B138AD 95%);
    opacity: 0;

    pointer-events: none;

    transition: .7s;
    

    > svg {
        position: absolute;
        top: .5rem;
        left: 2vw;
        color: #fff;
        transform: rotate(45deg);
        opacity: 0;
        transition: .7s;
        cursor: pointer;
    }

    > svg :hover {
        opacity: 0.7;
    }

    .menu_container{
        display: flex;
        flex-direction: column;
        margin-top:2vh;
    }

    ul{
        display:flex;
        flex-direction: column;
        list-style: none;        
    }

    ul svg{
        color: #fff;
        font-size: 0em;
        margin-right: 1rem;
        cursor: pointer;
        opacity: 0;
        transition: 1s;
    }

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 2.3vw;
        padding-bottom: 2vh;
        padding-top: 2vh;
        border-bottom: #fff ridge;
        width: 100%;
        height: 100%;
        min-width: 300px;
    }

    li:hover{
       opacity: 0.7;
    }

    p,a, button {
        color: #fff;
        text-decoration: none;
        text-align: left;
        background: none;
        border: none;
        font-weight: bold;
        font-size: 0em;
        cursor: pointer;
        width: 100%;
        opacity: 0;
        transition: 1s;
    }   
    .optionIcon{
        color: #fff;
        font-size: 0em;
        margin-right: 1rem;
        cursor: pointer;
        opacity: 0;
        transition: 1s;
    }

        
    .user_container{
        display:flex;
        flex-direction: column;
        justify-content: end;
        margin-left: 2.3vw;
        margin-bottom: 3vh;
        border-radius: 0rem;
        border-left: 0px #fff solid;
        opacity: 0;
        transition: 0.3s;
    }

    .user_options:hover{
        opacity: 0.7;
    }

    .user_options {
        display:flex;
        align-items: center;
        margin-left: .5vw;
    }
    

    .user_options p {
        color: #fff;
        font-weight:bolder;
        transition: 0.3s;
        text-decoration:none;
    }

    .user_options svg {
        color: #fff;
        margin-right: .5rem;
        font-size: 0rem;
        cursor: pointer;
        opacity: 0;
        transition: 1s;
    }

    .job_position_container p{
        color: #fff;
        font-weight: 600;
        font-size: 0rem;
        opacity: 0;
        transition: 1s;
    }



    .logout_container{
        display: flex;
        margin-left: 2.3vw;
        width: 100%;
        padding-top: 2vh;
    }
 
    .logout_container p{
        font-size: 0rem;
        opacity: 0;
        transition: 1s;
    }

    .logout_container:hover{
        opacity: 0.7;
    }

    .logout_container svg {
        color: #fff;
        margin-right: .5rem;
        font-size: 0rem;
        cursor: pointer;
        opacity: 0;
        transition: 1s;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        min-width: 380px;
        width: 26%;
        height: 100%;
        margin-top: 7.8vh;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;


         >svg {
             opacity: 1;
             transform: rotate(0deg);
         }

         .logout_container p, p, a, button {    
            opacity: 1;
            font-size: medium;
         }

         .logout_container svg, .optionIcon, ul svg {
            opacity: 1;
            font-size: x-large;
         }

         .user_options svg{
             opacity: 1;
            font-size: 5rem;
         }
         
         .user_container{
            border-left: 5px #fff solid;
             opacity: 1;
         }
         .job_position_container p{
            opacity: 1;
            font-size: small;
        }

        @media (max-width: 799px) {
            opacity: 1;
            pointer-events: auto;
            width: 100%;
            min-width: 300px;
            background: #c918a1;
            background: linear-gradient(90deg, #c918a1 0%, #6F91D0 95%);

            .menu_container{
                width: 100%;
                margin-right: 10%;
            }

            .user_container{
                margin-left: 6vw;
            }

            .user_options{
                margin-left: 1.5vw;
            }
            
            li{
                padding-left: 6vw;
                width: 100%;
            }

            .logout_container{
                margin-left: 6vw;
            }
        }

    `}
`;