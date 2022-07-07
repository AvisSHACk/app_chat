import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { 
    ButtonMensaje, 
    ChatBoxContainer, 
    FormMensaje,
    InputMensaje
} from "../elementos/ContainerApp";
import { db } from "../firebase/firebaseConfig";
const ChatBox = ({id, userAmigo}) => {
    const [mensaje, cambiarMensaje] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, `chats/${id}/mensajes`), {
            mensaje: mensaje,
            email: userAmigo,
            timestamp: serverTimestamp()
        })

    }
    return ( 
        <ChatBoxContainer>
            <FormMensaje action="" onSubmit={handleSubmit}>
                <InputMensaje 
                    type="text" 
                    name="mensaje" 
                    id="mensaje" 
                    placeholder="Escribe tu mensaje"
                    onChange={(e) => cambiarMensaje(e.target.value)}
                    value={mensaje}
                />
                <ButtonMensaje>Enviar</ButtonMensaje>
            </FormMensaje>
        </ChatBoxContainer>
     );
}
 
export default ChatBox;