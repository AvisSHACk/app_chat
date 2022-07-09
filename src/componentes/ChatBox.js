import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { 
    ButtonMensaje, 
    ChatBoxContainer, 
    FormMensaje,
    InputMensaje
} from "../elementos/ContainerApp";
import { db } from "../firebase/firebaseConfig";
const ChatBox = ({id, userAmigo, anchor}) => {
    const [mensaje, cambiarMensaje] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, `chats/${id}/mensajes`), {
            mensaje: mensaje,
            email: userAmigo,
            timestamp: serverTimestamp()
        })
        cambiarMensaje("");
        anchor.current.scrollIntoView({behavior: "smooth"})

    }

    useEffect(() => {
        anchor.current.scrollIntoView({behavior: "smooth"})
    })
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