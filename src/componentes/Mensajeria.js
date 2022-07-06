import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contextos/authContext";
import { useChat } from "../contextos/chatsContext";
import { 
    ButtonMensaje, 
    ChatBox, 
    FormMensaje, 
    HeaderMensjeria, 
    InputMensaje, 
    Mensajes, 
    MensajesContainer, 
    MyMensaje, 
    YourMensaje 
} from "../elementos/ContainerApp";
import { db } from "../firebase/firebaseConfig";

const Mensajeria = () => {
    const {chats} = useChat();
    const {usuario} = useAuth();
    const {id} = useParams();

    const [userAmigo, cambiarUserAmigo] = useState({});

    useEffect(() =>{
        const onSuscribe = onSnapshot(doc(db, `chats/${id}`), (snapshot) => {
            cambiarUserAmigo(snapshot.data().users.filter(user => user !== usuario.email))
        })
    }, [id, usuario])

    console.log(userAmigo);


    return ( 
        <MensajesContainer>
            <HeaderMensjeria>
                <h2>{userAmigo}</h2>
            </HeaderMensjeria>
            <Mensajes>
                <MyMensaje>Lorem ipsum dolor sit amet consectetur adipisicing elit.</MyMensaje>
                <YourMensaje>Lorem ipsum dolor sit amet consectetur adipisicing elit.</YourMensaje>
            </Mensajes>
            <ChatBox>
                    <FormMensaje action="">
                        <InputMensaje type="text" name="mensaje" id="mensaje" placeholder="Escribe tu mensaje"/>
                        <ButtonMensaje>Enviar</ButtonMensaje>
                    </FormMensaje>
                </ChatBox>
        </MensajesContainer>
     );
}
 
export default Mensajeria;