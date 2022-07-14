import {addDoc, auth, collection, db, signOut} from "./../firebase/firebaseConfig";
import {
    ButtonMensaje,
    ConstainerChats,
    SidebarContainer,
    TitleSidebar} from "../elementos/ContainerApp";
import ChatSide from "./ChatSide";
import {useState } from "react";
import { useAuth } from "../contextos/authContext";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import filterEmailFriend from "./../functions/filterEmailFriend";
import HeaderSidebar from "./HeaderSidebar";
import ButtonAdd from "./ButtonAdd";


const Sidebar = ({chats, cambiarIdChat, buttonMobile, cambiarbuttonMobile, idChat, usuarioLogeado}) => {
    const [emailAmigo, cambiarEmailAmigo] = useState("");
    const {usuario} = useAuth();
    
    const cerrarSesion = () => {
        signOut(auth);
    }

    const getId = (e, id) => {
        e.preventDefault();
        cambiarIdChat(id);
    }

    const cerrarSidebar = () => {
        cambiarbuttonMobile(false)
    }
    
    return ( 
        <SidebarContainer buttonMobile={buttonMobile}>
            <HeaderSidebar userName={usuarioLogeado.userName} cerrarSesion={cerrarSesion}/>
            <TitleSidebar>Conversaciones</TitleSidebar>
            <ConstainerChats>
                {filterEmailFriend(chats, usuario.email).map((chat) => 
                    <ChatSide 
                        chat={chat} 
                        getId={getId} 
                        usuario={usuarioLogeado}
                        activo={idChat === chat.id}/>
                )}
                <ButtonAdd userNameUsuario={usuarioLogeado.userName}/>
            </ConstainerChats>
        </SidebarContainer>
     );
}
 
export default Sidebar;