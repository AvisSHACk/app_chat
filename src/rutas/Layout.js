import {ContainerApp} from "../elementos/ContainerApp";
import Sidebar from "../componentes/Sidebar";
import Mensajeria from "../componentes/Mensajeria";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";


const Layout = () => {
    const [chats, cambiarChats] = useState([]);
    const [idChat, cambiarIdChat] = useState();
    const [buttonMobile, cambiarbuttonMobile] = useState(false);
    // const [cargando, cambiarCargando] = useState(true);

    useEffect(() => {
        const onSuscribe = onSnapshot(collection(db, "chats"),
        (snapshot) => {
            cambiarChats(snapshot.docs.map((chat) => {
                return {...chat.data(), id: chat.id, }
            }))
            // cambiarCargando(false);
        })

        return onSuscribe;
    }, [])

    return (
        <ContainerApp>
            <Sidebar 
                chats={chats} 
                cambiarIdChat={cambiarIdChat} 
                buttonMobile={buttonMobile}
                cambiarbuttonMobile={cambiarbuttonMobile}
            />
            <Mensajeria 
                chats={chats} 
                id={idChat} 
                buttonMobile={buttonMobile}
                cambiarbuttonMobile={cambiarbuttonMobile}
            />
        </ContainerApp>
     );
}
 
export default Layout;