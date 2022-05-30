import {  useParams } from 'react-router-dom'

function Contact(){
    const {url} = useParams()
    return(
        <div>
            <h1>Contato</h1>
            <p>{url}</p>
        </div>
    )
}

export default Contact