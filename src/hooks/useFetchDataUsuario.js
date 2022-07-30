import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, getUserInfo } from "../firebase/firebaseConfig";
import { useAuth } from "../contextos/authContext";

//Hook que obtiene las conversaciones del usuario logeado
const useFetchDataChats = () => {
    const [chats, cambiarChats] = useState([]);
    const [usuarioLogeado, cambiarUsuarioLogeado] = useState({});
    const {usuario} = useAuth();

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
    return [chats, usuarioLogeado];
}
 
export default useFetchDataChats;