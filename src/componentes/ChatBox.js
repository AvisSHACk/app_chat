import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { 
    ButtonElement, 
    ChatBoxContainer, 
    FormMensaje,
    InputMensaje
} from "../elementos/ContainerApp";
import { handleMessageSend } from "../firebase/firebaseConfig";
const ChatBox = ({id, userAmigo, anchor}) => {
    const [mensaje, cambiarMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleMessageSend(id, mensaje, userAmigo);
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
                <ButtonElement marginleft>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </ButtonElement>
            </FormMensaje>
        </ChatBoxContainer>
     );
}
 
export default ChatBox;