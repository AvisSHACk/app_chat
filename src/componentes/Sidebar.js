import {auth, signOut} from "./../firebase/firebaseConfig";
import {
    ConstainerChats,
    SidebarContainer,
    SidebarElement,
    TitleSidebar} from "../elementos/ContainerApp";
import ChatSide from "./ChatSide";
// import {useState } from "react";
import { useAuth } from "../contextos/authContext";
import filterEmailFriend from "./../functions/filterEmailFriend";
import HeaderSidebar from "./HeaderSidebar";
import ButtonAdd from "./ButtonAdd";


const Sidebar = ({chats, cambiarIdChat, buttonMobile, cambiarbuttonMobile, idChat, usuarioLogeado}) => {
    // const [emailAmigo, cambiarEmailAmigo] = useState("");
    const {usuario} = useAuth();
    
    const cerrarSesion = () => {
        signOut(auth);
    }

    const getId = (e, id) => {
        e.preventDefault();
        cambiarIdChat(id);
    }
    
    return ( 
        <SidebarElement buttonMobile={buttonMobile} >
            <SidebarContainer>
                <HeaderSidebar 
                    userName={usuarioLogeado.userName} 
                    cerrarSesion={cerrarSesion} 
                    cambiarbuttonMobile={cambiarbuttonMobile}
                    ocultar={buttonMobile}
                    
                />
                <TitleSidebar>Conversaciones</TitleSidebar>
                <ConstainerChats>
                    {filterEmailFriend(chats, usuario.email).map((chat) => 
                        <ChatSide 
                            key={chat.id}
                            chat={chat} 
                            getId={getId} 
                            usuario={usuarioLogeado}
                            activo={idChat === chat.id}
                            cambiarbuttonMobile={cambiarbuttonMobile}
                        />
                    )}
                </ConstainerChats>
                <ButtonAdd userNameUsuario={usuarioLogeado.userName}/>
            </SidebarContainer>
        </SidebarElement>
     );
}
 
export default Sidebar;