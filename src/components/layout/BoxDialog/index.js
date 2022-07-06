import { Container } from "./styles";

import { IoWarningOutline } from "react-icons/io5"

import { destroyRequest } from '../../../services/api'


export default function BoxDialog({ requestUserId, requestId, loadRequests, setVisibleBoxDialogDelete, msg}){
    return(
        <Container>
            <div className="overlay">
                <div className="box_dialog_container">
                    <IoWarningOutline size={40} />
                    <p>Tem certeza que deseja excluir a solicitação?</p>
                    <div className="action_container">
                        <button className="button_left" onClick={async() => {
                            await destroyRequest(requestUserId, requestId);
                            await loadRequests();
                            setVisibleBoxDialogDelete(false);
                            msg('Solicitação excluida com sucesso!');
                        }}>Sim</button>
                        <button className="button_right" onClick={() => setVisibleBoxDialogDelete(false)} >Não</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}