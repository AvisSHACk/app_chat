import {addDoc, auth, collection, db, signOut} from "./../firebase/firebaseConfig";
import {
    ButtonMensaje,
    ChatSide,
    ConstainerChats,
    ImageSide,
    NombreChat, 
    SidebarContainer} from "../elementos/ContainerApp";
import {useState } from "react";
import { useAuth } from "../contextos/authContext";
import { useChat } from "../contextos/chatsContext";
import { Button, FormAuth, Input } from "../elementos/FormAuth";


const Sidebar = () => {
    const [emailAmigo, cambiarEmailAmigo] = useState("");
    const {usuario} = useAuth();
    const {chats} = useChat();
    
    const cerrarSesion = () => {
        signOut(auth);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        addDoc(collection(db, "chats"), {
            users: [emailAmigo, usuario.email]
        })
        
        cambiarEmailAmigo("");



    }
    return ( 
        <SidebarContainer>
            <h3>Conversaciones <ButtonMensaje onClick={cerrarSesion}>Cerrar sesion</ButtonMensaje></h3>
            <FormAuth action="" onSubmit={handleSubmit} app={true}>
                <Input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={emailAmigo}
                    onChange={(e) => cambiarEmailAmigo(e.target.value)} 
                    app={true}
                    placeholder="Agrega un amigo con su correo"
                />
                <Button app={true}>Agregar amigo</Button>
            </FormAuth>
            <ConstainerChats>
                {chats.filter(chat => chat.users.includes(usuario.email)).map((chat) => 
                    <ChatSide key={chat.id} to={`/${chat.id}`}>
                        <ImageSide src="https://picsum.photos/50" alt="" />
                        <NombreChat>{chat.users.filter(user => user !== usuario.email)}</NombreChat>
                    </ChatSide>

                )}
            </ConstainerChats>
        </SidebarContainer>
     );
}
 
export default Sidebar;