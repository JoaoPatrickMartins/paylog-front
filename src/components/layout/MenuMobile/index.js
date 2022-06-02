import { Container } from './styles';

import {  useNavigate } from "react-router-dom"

import { IoClose, IoChevronBack, IoLogOutOutline,IoReader, IoChatboxEllipses, IoWarning, IoTime, IoBagHandle, IoFileTrayStacked, IoCreate, IoPersonCircle } from "react-icons/io5"

import { useEffect, useState } from 'react';


export function MenuMobile({ menuIsVisible, setMenuIsVisible, user, logout}){
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    const [plusoptionsIsVisible, setplusOptionsIsVisible] = useState(false)
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
            setplusOptionsIsVisible(false)
            return setMenuIsVisible(false)
        }

        if(option === 'requestHistory'){
            navigate('/requests')
            setplusOptionsIsVisible(false)
            return setMenuIsVisible(false)
        }

        if(option === 'newrequest'){
            navigate('/newrequest')
            setplusOptionsIsVisible(false)
            return setMenuIsVisible(false)
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

            {!plusoptionsIsVisible && (
                <IoClose size={45} onClick={() => {
                    setMenuIsVisible(false);
                    setplusOptionsIsVisible(false);
                }} />
            )}
            
            {plusoptionsIsVisible && (
                <IoChevronBack size={45} onClick={() => {
                    setMenuIsVisible(true);
                    setOption('');
                    setplusOptionsIsVisible(false);
                }} />
            )}

            <div className='menu_container'>
                
                {user && (
                    <div className='user_container' >
                        <div className='user_options' onClick={() => {
                                    optionSelected('myaccount');
                                    }}>
                            <IoPersonCircle  />
                            <div>
                                <p>Olá, {user.first_name}</p>
                                <div className='job_position_container'>
                                    <p>{user.job_position}</p>
                                    <p>{user.company}</p>
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
                                <IoFileTrayStacked/>
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
                                    <button >Nova Solitação</button>
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