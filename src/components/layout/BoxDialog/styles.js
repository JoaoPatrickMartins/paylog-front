import styled from "styled-components";

export const Container = styled.section`
.overlay{
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
    border-top: 5px #ff7514 solid;
    border-radius: 1em;
    width: 400px;
    height: 170px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    z-index: 5;

    text-align: center;
    align-items: center;
}

.box_dialog_container svg{
    margin-top: 2em;
    color: #ff7514;

}

.box_dialog_container p{
    margin-top: 1em;
    margin-bottom: 1em;
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
    border: none;
    
    color: #666666;
    border-top: 1.5px solid #C2C2C2 ;
   
    padding: 0.6em 1em;
}

.button_left{
    border-radius: 0 0 0 1rem;
}

.button_right{
    border-radius: 0 0 1rem 0;
    
}

.button_right:hover,
.button_left:hover{
    background-color: #C2C2C2;
}

`