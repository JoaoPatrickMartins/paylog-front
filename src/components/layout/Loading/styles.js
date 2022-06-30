import styled from 'styled-components';

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 80vh;

.loader{
    background-color: #C918A1;
    width: 100px;
    height: 100px;

    animation: morph-shape 1s cubic-bezier(1,.015,.295,1.225) infinite alternate;
}

@keyframes morph-shape {
    0% {
        border-radius: 0%;
    }

    50%{
        background-color: #9360BD;
        border-radius: 50% 0 50% 0;
        transform: rotate(.5turn);
    }

    100%{
        background-color: #6F91D0;
        border-radius: 50%;
        transform: rotate(1turn);
    }
}
`