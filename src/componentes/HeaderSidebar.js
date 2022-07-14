import { auth } from "../firebase/firebaseConfig";
import { ButtonMensaje } from "./../elementos/ContainerApp";
import {HeaderSidebarElement, TitleSidebar} from "./../elementos/ContainerApp";
const HeaderSidebar = ({userName, cerrarSesion}) => {
    return ( 
        <HeaderSidebarElement>
            <TitleSidebar>{userName}</TitleSidebar>
            <ButtonMensaje onClick={cerrarSesion}>Cerrar sesion</ButtonMensaje>
            {/* <ButtonMensaje onClick={cerrarSidebar}>Cerrar Menu</ButtonMensaje> */}
        </HeaderSidebarElement>
     );
}
 
export default HeaderSidebar;