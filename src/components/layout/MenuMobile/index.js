import { Container } from './styles';

import { IoClose } from 'react-icons/io5';

import { Link } from "react-router-dom"

import { BsFillPersonFill } from "react-icons/bs"


export function MenuMobile({ menuIsVisible, setMenuIsVisible, user}){

    return(
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false) } />
            <ul>
                    <li className='item'>
                    <a href="/requestspending">Solicitações Pendentes</a>
                    </li>
                    <li>
                        <a href="/requests">Histórico de Solicitações</a>
                    </li>
                    <li>
                        <a href="/Contact">Contato</a>
                    </li>
            </ul>
        </Container>
    )
}