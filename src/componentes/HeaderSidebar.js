import { ButtonMensaje } from "./../elementos/ContainerApp";
import {HeaderSidebarElement, TitleSidebar} from "./../elementos/ContainerApp";
const HeaderSidebar = ({userName, cerrarSesion, cambiarbuttonMobile}) => {
    
    return ( 
        <HeaderSidebarElement>
            <TitleSidebar>{userName}</TitleSidebar>
            <ButtonMensaje onClick={cerrarSesion}>Cerrar sesion</ButtonMensaje>
            <ButtonMensaje onClick={() => cambiarbuttonMobile(false)}>Cerrar Menu</ButtonMensaje>
        </HeaderSidebarElement>
     );
}
 
export default HeaderSidebar;