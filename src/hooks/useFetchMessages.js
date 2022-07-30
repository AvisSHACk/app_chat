import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contextos/authContext";
//Hook que obtiene los mensajes de cada conversacion, devuelve los mensajes, el email, el usuario del amigo y
const useFetchMessages = (chats, id, usuarioLogeado) => {
    const [userAmigo, cambiarUserAmigo] = useState({});
    const [mensajes, cambiarMensajes] = useState([]);
    const [emailAmigo, cambiarEmailAmigo] = useState([]);
    const [cargando, cambiarCargando] = useState(true);
    const {usuario} = useAuth();

    useEffect(() =>{
        if(id) {
            cambiarEmailAmigo(
                chats.filter(chat => chat.id === id)[0]
                .users.filter(user => user !== usuario.email)[0]
            )

            cambiarUserAmigo(
                chats.filter(chat => chat.id === id)[0]
                .userAmigo.filter(userName => userName !== usuarioLogeado.userName)[0]
            )
            
            //Obtener los mensajes de cada chat disponible
            const onSuscribe = onSnapshot(query(collection(db, `chats/${id}/mensajes`), orderBy("timestamp")), (snapshot) => {
                cambiarMensajes(snapshot.docs.map(mensaje => {
                    return {...mensaje.data()};
                }));
            })
            
            cambiarCargando(false);
            return onSuscribe;
        }


        
    }, [id, usuario, chats, usuarioLogeado])
    return [ userAmigo, mensajes, emailAmigo, cargando ];
}
 
export default useFetchMessages;