import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contextos/authContext";
import { useChat } from "../contextos/chatsContext";
import { 
    HeaderMensjeria, 
    Mensajes, 
    MensajesContainer, 
    MyMensaje
} from "../elementos/ContainerApp";
import { db } from "../firebase/firebaseConfig";
import ChatBox from "./ChatBox";

const Mensajeria = () => {
    const {chats} = useChat();
    const {usuario} = useAuth();
    const {id} = useParams();
    const [userAmigo, cambiarUserAmigo] = useState({});
    const [mensajes, cambiarMensajes] = useState([]);
    const [cargando, cambiarCargando] = useState(true);
    const anchor = useRef();
    

    useEffect(() =>{
        
        cambiarUserAmigo(
            chats.filter(chat => chat.id === id)[0]
            .users.filter(user => user !== usuario.email)[0]
        )

        const onSuscribe = onSnapshot(query(collection(db, `chats/${id}/mensajes`), orderBy("timestamp")), (snapshot) => {
            cambiarMensajes(snapshot.docs.map(mensaje => {
                return {...mensaje.data()};
            }));
        })
        
        cambiarCargando(false);
        return onSuscribe;
        
    }, [id, usuario, chats])

    console.log(mensajes)
    return ( 
        <MensajesContainer>
            <HeaderMensjeria>
                <h2>{!cargando && userAmigo}</h2>
            </HeaderMensjeria>
            <Mensajes>
                {!cargando && mensajes.map(mensaje => {
                    return <MyMensaje key={Math.random()} propiedad={mensaje.email === usuario.email}>{mensaje.mensaje}</MyMensaje>
                })}
                    
                {/* <YourMensaje>Lorem ipsum dolor sit amet consectetur adipisicing elit.</YourMensaje> */}
            <div ref={anchor}></div>
            </Mensajes>
            <ChatBox id={id} userAmigo={userAmigo} anchor={anchor}/>
        </MensajesContainer>
        
     );
}
 
export default Mensajeria;