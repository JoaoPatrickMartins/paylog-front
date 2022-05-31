import styled, { css } from 'styled-components';

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(6,148,181,1);
    background: linear-gradient(55deg, #c918a1 0%, #6F91D0 95%);
    opacity: 0;

    pointer-events: none;

    transition: .7s;
    

    > svg {
        position: absolute;
        top: .5rem;
        left: 1.7rem;
        color: #fff;
        transform: rotate(45deg);
        transition: .7s;
        cursor: pointer;
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        list-style: none;        
    }

    a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 0em;
        opacity: 0.7;
        transition: .4s;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        width: 20%;

         >svg {
             transform: rotate(0deg);
         }

         a {
            opacity: 1;
            font-size: medium;
         }

    `}
`;