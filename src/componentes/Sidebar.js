import {addDoc, auth, collection, db, signOut} from "./../firebase/firebaseConfig";
import {
    ButtonMensaje,
    ChatSide,
    ImageSide,
    NombreChat, 
    SidebarContainer} from "../elementos/ContainerApp";
import {useState } from "react";
import { useAuth } from "../contextos/authContext";
import { useChat } from "../contextos/chatsContext";


const Sidebar = () => {
    const [emailAmigo, cambiarEmailAmigo] = useState("");
    const {usuario} = useAuth();
    const {chats} = useChat();
    
    const cerrarSesion = () => {
        signOut(auth);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await addDoc(collection(db, "chats"), {
            users: [emailAmigo, usuario.email]
        })

    }
    return ( 
        <SidebarContainer>
            <h3>Conversaciones <ButtonMensaje onClick={cerrarSesion}>Cerrar sesion</ButtonMensaje></h3>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    onChange={(e) => cambiarEmailAmigo(e.target.value)} 
                />
                <button>Agregar amigo</button>
            </form>
            {chats.filter(chat => chat.users.includes(usuario.email)).map((chat) => 
                <ChatSide key={chat.id} to={`/${chat.id}`}>
                    <ImageSide src="https://picsum.photos/50" alt="" />
                    <NombreChat>{chat.users.filter(user => user !== usuario.email)}</NombreChat>
                </ChatSide>
            )}
        </SidebarContainer>
     );
}
 
export default Sidebar;