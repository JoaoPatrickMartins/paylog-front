import { Container } from "./styles";

export default function BoxDialog(){
    return(
        <Container>
            <div className="overlay">
                <div className="box_dialog_container">
                    <p>Tem certeza que deseja excluir a solicitação?</p>
                    <div className="action_container">
                        <button className="button_left">Sim</button>
                        <button className="button_right">Não</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

 