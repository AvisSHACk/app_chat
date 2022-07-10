import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../contextos/authContext";
import { 
    HeaderMensjeria, 
    Mensajes, 
    MensajesContainer, 
    MyMensaje
} from "../elementos/ContainerApp";
import { Button } from "../elementos/FormAuth";
import { db } from "../firebase/firebaseConfig";
import ChatBox from "./ChatBox";

const Mensajeria = ({chats, id, cambiarbuttonMobile}) => {
    const {usuario} = useAuth();
    const [userAmigo, cambiarUserAmigo] = useState({});
    const [mensajes, cambiarMensajes] = useState([]);
    const [cargando, cambiarCargando] = useState(true);
    const anchor = useRef();
    

    useEffect(() =>{
        if(id) {
            cambiarUserAmigo(
                chats.filter(chat => chat.id === id)[0]
                .users.filter(user => user !== usuario.email)[0]
            )
            console.log(id);

            const onSuscribe = onSnapshot(query(collection(db, `chats/${id}/mensajes`), orderBy("timestamp")), (snapshot) => {
                cambiarMensajes(snapshot.docs.map(mensaje => {
                    return {...mensaje.data()};
                }));
            })
            
            cambiarCargando(false);
            console.log(chats)
            return onSuscribe;
        }


        
    }, [id, usuario, chats])

    const abrirMenu = () => {
        cambiarbuttonMobile(true);
    }

    return ( 
        <MensajesContainer>
            <HeaderMensjeria>
                <Button onClick={() => abrirMenu()}>Menu</Button>
                <h2>{!cargando && userAmigo}</h2>
            </HeaderMensjeria>
            <Mensajes>
                {!cargando && mensajes.map(mensaje => {
                    return <MyMensaje key={Math.random()} propiedad={mensaje.email === usuario.email}>{mensaje.mensaje}</MyMensaje>
                })}
                <div ref={anchor}></div>
            </Mensajes>
            <ChatBox id={id} userAmigo={userAmigo} anchor={anchor}/>
        </MensajesContainer>
        
     );
}
 
export default Mensajeria;