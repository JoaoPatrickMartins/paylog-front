import styled, { css } from 'styled-components';

export const Container = styled.section`

    .body_container{
        display: flex;
        position: absolute;
        backdrop-filter: blur(3px);
        width: 26%;
        min-width: 380px;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;    
        margin-top: 7.8vh;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

        background: #c918a1;
        background: linear-gradient(90deg, #c918a1 0%, #B138AD 95%);

        pointer-events: none;

        opacity: 0;
        transition: .3s;
    }
    

    .overlay{
        pointer-events: none;
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.3); 
        backdrop-filter: blur(3px);
        position: fixed;
        top: 7.95vh;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        transition: .3s;
    }
    

    > svg {
        position: absolute;
        top: .5rem;
        left: 2vw;
        color: #fff;
        transform: rotate(45deg);
        opacity: 0;
        transition: .5s;
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
        transition: .5s;
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
        font-size: medium;
        cursor: pointer;
        width: 100%;
        opacity: 0;
        transition: .5s;
    }   
    .optionIcon{
        color: #fff;
        font-size: 0em;
        margin-right: 1rem;
        cursor: pointer;
        opacity: 0;
        transition: .5s;
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
        transition: 0.1s;
        text-decoration:none;
    }

    .user_options svg {
        color: #fff;
        margin-right: .5rem;
        font-size: 0rem;
        cursor: pointer;
        opacity: 0;
        transition: .5s;
    }

    .job_position_container p{
        color: #fff;
        font-weight: 600;
        font-size: 0rem;
        opacity: 0;
        transition: .3s;
    }



    .logout_container{
        display: flex;
        margin-left: 2.3vw;
        width: 100%;
        padding-top: 2vh;
    }
 
    .logout_container p{
        font-size: medium;
        opacity: 0;
        transition: .5s;
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
        transition: .5s;
    }

    @media (max-width: 799px) {
        .body_container{
            opacity: 0;
            pointer-events: none;
            width: 100%;
            min-width: 300px;
            background: #c918a1;
            background: linear-gradient(90deg, #c918a1 0%, #6F91D0 95%);
        }

        .overlay{
            pointer-events: none;
            z-index: 4;
            background-color: rgba(0, 0, 0, 0.6);
            position: fixed;
            top: 8.1vh;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
        }

            .menu_container{
                width: 100%;
                margin-right: 10%;
                opacity: 0;
                transition: .3s;
            }

            .user_container{
                margin-left: 6vw;
                opacity: 0;
                transition: .3s;
            }

            .user_options{
                margin-left: 1.5vw;
                opacity: 0;
                transition: .3s;
            }
            
            li{
                padding-left: 6vw;
                width: 100%;
                opacity: 0;
                transition: .3s;
            }

            .logout_container{
                margin-left: 6vw;
                opacity: 0;
                transition: .3s;
            }
        }

    ${({ isVisible }) => isVisible && css`
        .body_container{
            opacity: 1;
            pointer-events: auto;
        }
        
        .overlay{
            opacity: 1;
            pointer-events: auto;
        }

         >svg {
             opacity: 1;
             transform: rotate(0deg);
         }

         .logout_container p, p, a, button {    
                opacity: 1;
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
            .body_container{
                opacity: 1;
                pointer-events: auto;
                width: 100%;
                min-width: 300px;
                background: #c918a1;
                background: linear-gradient(90deg, #c918a1 0%, #6F91D0 95%);
            }

            .overlay{
                opacity: 1;
                pointer-events: auto;
            }

            .menu_container{
                opacity: 1;
                transition: .3s;
            }

            .user_container{
                opacity: 1;
                transition: .5s;
            }

            .user_options{
                opacity: 1;
                transition: .5s;
            }
            
            li{
                opacity: 1;
                transition: .5s;
            }

            .logout_container{
                opacity: 1;
                transition: .5s;
            }
        }

    `}
`;