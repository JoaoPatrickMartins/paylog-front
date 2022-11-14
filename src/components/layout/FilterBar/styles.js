import styled from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: flex-end;

.filterContainer{
    margin-bottom: 1rem;
    align-content: center;
    justify-content: center;
}

.filterContainer p{
    margin-bottom: .5rem;
    color: #7B7B7B;
}

.labelStartDate {
    color: #7B7B7B;
}

.input_start_data {
    margin-top: .5rem;
    margin-bottom: 1rem;
    margin-left: .5rem;
    margin-right: 2rem;
    padding: 0.7em;
    border-radius: 0.5em;
    border: 1px solid #c2c2c2;
    outline: none;
}

.labelEndDate {
    color: #7B7B7B;
}

.input_end_data {
    margin-bottom: .5rem;
    margin-left: .5rem;
    margin-right: .5rem;
    padding: 0.7em;
    border-radius: 0.5em;
    border: 1px solid #c2c2c2;
    outline: none;
}

.buttonContainer {
    width: 100%;
}

.buttonContainer button {
    width: 40%;
    margin-left: 5%;
    margin-top: .5rem;
    margin-bottom: 1rem;
    padding: .5rem .5rem .5rem .5rem;
    text-decoration: none;
    border-radius: 10rem;
    background-color: #9360BD;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    color: #fff;
    font-weight: bold;
    border: none;
    max-height: 50px;
    transition: 0.5s;
}

.buttonContainer button:hover {
  opacity: 0.8;
}

.buttonFiltro {
    margin-bottom: 1rem;
    
}

.buttonFiltro button {

    padding: 1rem 1rem 1rem 1rem;
    text-decoration: none;
    border-radius: 50%;
    background-color: #9360BD;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    color: #fff;
    font-weight: bold;
    border: none;
    max-height: 50px;
    transition: 0.5s;
}

.buttonFiltro button:hover {
  opacity: 0.8;
}

.buttonFiltro SVG {
    font-size: large;
}

.iconContainer{
    width: 20px;
    height: 20px;
}

`