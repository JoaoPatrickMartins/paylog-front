import styled from 'styled-components';

export const Styles = styled.section`
display: flex;
width: 100%;
justify-content: center;
align-items: center;


.form {
    width: 100%;
    margin: 2em auto;
}

.err_container{
    width: 100%;
}

.err_container p{
    font-size:0.7rem;
    color: red;
    text-align: end;
    
}

.newrequest_container {
    width: 450px;
    margin: 0 auto;
    padding: 3em;
}

.newrequest_container h1 {
    margin-bottom: 0.5em;
}

.newrequest_container p {
    color: #7B7B7B;
}

.title_frame {
    border-left: 5px #9360BD solid;
}

.title_frame h1{
    color: #9360BD;
    margin-left: 1rem;
}

.title_container p{
    color: #666666;
}

.msg_container{
    width: 100%;
    margin-bottom: 1em;
}

.msg_container p{
    font-size:0.8rem;
    color: red;
    text-align: center;

}

`