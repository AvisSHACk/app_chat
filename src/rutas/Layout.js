import {ContainerApp} from "../elementos/ContainerApp";
import Sidebar from "../componentes/Sidebar";
import Mensajeria from "../componentes/Mensajeria";
import { useState } from "react";
import useFetchDataChats from "../hooks/useFetchDataUsuario";


const Layout = () => {
    const [chats, usuarioLogeado] = useFetchDataChats();
    const [idChat, cambiarIdChat] = useState();
    const [buttonMobile, cambiarbuttonMobile] = useState(false);
    // const [cargando, cambiarCargando] = useState(true);

    return (
        <ContainerApp>
            <Sidebar 
                chats={chats} 
                cambiarIdChat={cambiarIdChat} 
                buttonMobile={buttonMobile}
                cambiarbuttonMobile={cambiarbuttonMobile}
                idChat={idChat}
                usuarioLogeado={usuarioLogeado}
            />
            <Mensajeria 
                chats={chats} 
                id={idChat}
                cambiarbuttonMobile={cambiarbuttonMobile}
                usuarioLogeado={usuarioLogeado}
            />
        </ContainerApp>
     );
}
 
export default Layout;