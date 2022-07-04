import styled from "styled-components";

export const Container = styled.section`
.overlay{
    pointer-events: none;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.3); 
    backdrop-filter: blur(3px);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 1;
    transition: .3s;
}

.box_dialog_container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    background-color: #fafafa;
    border-radius: 1em;
    width: 400px;
    height: 170px;
    z-index: 5;

    text-align: center;
}

.box_dialog_container p{
    margin-top: 2em;
    color: #666666;
}



.action_container{
    display: flex;
    width: 100%;
}

.action_container button{
    width: 50%;
    background-color: #fafafa;
    text-decoration: none;
    
    color: #666666;
   
    padding: 0.6em 1em;
}

.button_left{
    border: none;
    border-radius: 0 0 0 1rem;
    border-left: 1.5px solid #C2C2C2 ;
    border-top: 1.5px solid #C2C2C2 ;
    margin-right: .01em;
}

.button_right{
    border: none;
    border-top: 1.5px solid #C2C2C2 ;
    border-radius: 0 0 1rem 0;
    
}

`