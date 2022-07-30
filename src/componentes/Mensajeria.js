import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useAuth } from "../contextos/authContext";
import { 
    HeaderMensjeria, 
    Mensajes, 
    MensajesContainer, 
    MyMensaje
} from "../elementos/ContainerApp";
import { ButtonElement } from "../elementos/ContainerApp";
import ChatBox from "./ChatBox";
import useFetchMessages from "../hooks/useFetchMessages";
import abrirMenu from "../functions/abrirMenu";

const Mensajeria = ({chats, id, cambiarbuttonMobile, usuarioLogeado}) => {
    const {usuario} = useAuth();
    const anchor = useRef();
    const [userAmigo, mensajes, emailAmigo, cargando] = useFetchMessages(chats, id, usuarioLogeado);

    return ( 
        <MensajesContainer>
            <HeaderMensjeria>
                <ButtonElement onClick={() => abrirMenu(cambiarbuttonMobile)} mobile>
                    <FontAwesomeIcon icon={faBars}/>
                </ButtonElement>
                {/* <h2>{!cargando && userAmigo}</h2> */}
                <h2>{!cargando && userAmigo}</h2>
            </HeaderMensjeria>
            <Mensajes>
                {!cargando && mensajes.map(mensaje => {
                    return <MyMensaje key={Math.random()} propiedad={mensaje.email === usuario.email}>{mensaje.mensaje}</MyMensaje>
                })}
                <div ref={anchor}></div>
            </Mensajes>
            <ChatBox id={id} userAmigo={emailAmigo} anchor={anchor}/>
        </MensajesContainer>
        
     );
}
 
export default Mensajeria;