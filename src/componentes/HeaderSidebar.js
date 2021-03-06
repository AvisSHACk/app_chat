import {auth, signOut} from "./../firebase/firebaseConfig";
import { faArrowRightFromBracket, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonElement } from "./../elementos/ContainerApp";
import {HeaderSidebarElement, TitleSidebar} from "./../elementos/ContainerApp";
import {ImageSide} from "./../elementos/ContainerApp";
const HeaderSidebar = ({userName, cambiarbuttonMobile}) => {

    const cerrarSesion = () => {
        signOut(auth);
    }
    
    return ( 
        <HeaderSidebarElement>
            <TitleSidebar>
                <ImageSide src="https://picsum.photos/50" alt="" />
                {userName}
            </TitleSidebar>
            <ButtonElement onClick={() => cambiarbuttonMobile(false)} title="Cerrar sidebar" marginleftright mobile>
                <FontAwesomeIcon icon={faXmark} />
            </ButtonElement>
            <ButtonElement onClick={cerrarSesion} title="Cerrar sesion">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </ButtonElement>
        </HeaderSidebarElement>
     );
}
 
export default HeaderSidebar;