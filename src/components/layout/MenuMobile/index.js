import { Container } from './styles';

import {  useNavigate } from "react-router-dom"

import {  IoLogOutOutline,IoReader, IoChatboxEllipses, IoWarning, IoTime, IoBagHandle, IoCubeSharp, IoCreate } from "react-icons/io5"

import { useEffect, useState } from 'react';


export function MenuMobile({ plusoptionsIsVisible, setplusOptionsIsVisible, menuIsVisible, setMenuIsVisible, user, logout}){
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    const [option, setOption] = useState('')
    const navigate = useNavigate();


    function optionSelected(option){

        if(option === ''){
            return setplusOptionsIsVisible(false)
        }

        if(option === 'requests'){
           return setOption(1);
        }

        if(option === 'contact'){
            navigate('/Contact')
            return setMenuIsVisible(false)
        }

        if(option === 'sales'){
            navigate('/Contact')
            return setMenuIsVisible(false)
        }

        if(option === 'inventory'){
            navigate('/Contact')
            return setMenuIsVisible(false)
        }

        if(option === 'requestspending'){
            navigate('/requestspending')
            setMenuIsVisible(false)
            return setplusOptionsIsVisible(false)
        }

        if(option === 'requestHistory'){
            navigate('/requests')
            setMenuIsVisible(false)
            return setplusOptionsIsVisible(false)
        }

        if(option === 'newrequest'){
            navigate('/newrequest')
            setMenuIsVisible(false)
            return setplusOptionsIsVisible(false)
        }
        
        if(option === 'myaccount'){
            navigate('/myaccount')
            setplusOptionsIsVisible(false)
            return setMenuIsVisible(false)
        }

        if(option === 'logout'){
            setMenuIsVisible(false);
            setplusOptionsIsVisible(false)
            return logout();
        }
        

    }

    return(
        <Container isVisible={menuIsVisible}>

            
            <div className='menu_container'>
                
                {user && (
                    <div className='user_container' >
                        <div className='user_options' onClick={() => {
                                    optionSelected('myaccount');
                                    }}>
                            
                            <div>
                                <p>Olá, {user.first_name}</p>
                                <div className='job_position_container'>
                                    <p>{user.company}</p>
                                    <p>{user.job_position}</p>
                                </div>   
                            </div>
                        </div>
                        
                        
                    </div>
                )}
                
                

                {!plusoptionsIsVisible && (
                    <>
                        <ul>
                            <li onClick={() => {
                                    optionSelected('requests');
                                    setplusOptionsIsVisible(true);
                                }}>
                                <IoReader/>
                                <button >Solicitações de pagamento</button>
                            </li>
                            <li onClick={() => {
                                    optionSelected('inventory');
                                }}>
                                <IoCubeSharp/>
                                <button >Estoque</button>
                            </li>
                            <li onClick={() => {
                                    optionSelected('sales');
                                }}>
                                <IoBagHandle/>
                                <button >Vendas</button>
                            </li>
                            <li onClick={() => {
                                    optionSelected('contact');
                                }}>
                                <IoChatboxEllipses/>
                                <button >Contato</button>
                            </li>
                        </ul>

                        <div className='logout_container' onClick={() => {
                                    optionSelected('logout');
                                }}>
                            <IoLogOutOutline/>
                            <button >Sair</button>
                        </div>
                    </>
                )}
                

                {plusoptionsIsVisible && (
                <> 
                    {(option === 1) && (
                            <ul>
                                <li onClick={() => {
                                    optionSelected('newrequest');
                                    }}>
                                    <IoCreate/>
                                    <button >Nova Solicitação</button>
                                </li>
                                <li onClick={() => {
                                    optionSelected('requestspending');
                                    }}>
                                    <IoWarning/>
                                    <button >Solicitações Pendentes</button>
                                </li>
                                <li onClick={() => {
                                    optionSelected('requestHistory');
                                    }}>
                                    <IoTime/>
                                    <button >Histórico de Solicitações</button>
                                </li>
                            </ul>
                        )}
                    </>
                    
                )}
            </div>
        </Container>
    )
}