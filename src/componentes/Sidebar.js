import {auth, signOut} from "./../firebase/firebaseConfig";
import {
    ButtonMensaje,
    ChatSide,
    ImageSide,
    NombreChat, 
    SidebarContainer} from "../elementos/ContainerApp";

const Sidebar = () => {

    const cerrarSesion = () => {
        signOut(auth);
    }
    return ( 
        <SidebarContainer>
            <h3>Conversaciones <ButtonMensaje onClick={cerrarSesion}>Cerrar sesion</ButtonMensaje></h3>
            <ChatSide>
                <ImageSide src="https://picsum.photos/50" alt="" />
                <NombreChat>Daniela</NombreChat>
            </ChatSide>
        </SidebarContainer>
     );
}
 
export default Sidebar;