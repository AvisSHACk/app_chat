import {ContainerApp} from "../elementos/ContainerApp";
import Sidebar from "../componentes/Sidebar";
import Mensajeria from "../componentes/Mensajeria";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, getUserInfo } from "../firebase/firebaseConfig";
import { useAuth } from "../contextos/authContext";


const Layout = () => {
    const [chats, cambiarChats] = useState([]);
    const [idChat, cambiarIdChat] = useState();
    const [buttonMobile, cambiarbuttonMobile] = useState(false);
    const [usuarioLogeado, cambiarUsuarioLogeado] = useState({});
    const {usuario} = useAuth();
    // const [cargando, cambiarCargando] = useState(true);

    useEffect( () => {
        const fetchUsuario = async () => {
            let usuarioResponse = await getUserInfo(usuario);
            cambiarUsuarioLogeado(usuarioResponse.data());
        }

        fetchUsuario();

        const onSuscribe = onSnapshot(collection(db, "chats"),
        (snapshot) => {
            cambiarChats(snapshot.docs.map((chat) => {
                return {...chat.data(), id: chat.id, }
            }))
            // cambiarCargando(false);
        })

        return onSuscribe;
    }, [usuario])

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