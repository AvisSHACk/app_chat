import {addDoc, auth, collection, db, signOut} from "./../firebase/firebaseConfig";
import {
    ButtonMensaje,
    ChatSide,
    ConstainerChats,
    ImageSide,
    NombreChat, 
    SidebarContainer,
    HeaderSidebar} from "../elementos/ContainerApp";
import {useState } from "react";
import { useAuth } from "../contextos/authContext";
import { Button, FormAuth, Input } from "../elementos/FormAuth";


const Sidebar = ({chats, cambiarIdChat, buttonMobile}) => {
    const [emailAmigo, cambiarEmailAmigo] = useState("");
    const {usuario} = useAuth();
    
    const cerrarSesion = () => {
        signOut(auth);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(emailAmigo === usuario.email) {
            cambiarEmailAmigo("");
            return;
        }
        
        addDoc(collection(db, "chats"), {
            users: [emailAmigo, usuario.email]
        })
        
        cambiarEmailAmigo("");
    }

    const getId = (e, id) => {
        e.preventDefault();
        cambiarIdChat(id);
    }
    
    return ( 
        <SidebarContainer buttonMobile={buttonMobile}>
            <HeaderSidebar>
                <h3>{usuario.email}</h3>
                <ButtonMensaje onClick={cerrarSesion}>Cerrar sesion</ButtonMensaje>
            </HeaderSidebar>
            <FormAuth action="" onSubmit={handleSubmit}>
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
            <h4>Conversaciones</h4>
            <ConstainerChats>
                {chats.filter(chat => chat.users.includes(usuario.email)).map((chat) => 
                    <ChatSide key={chat.id} to={'dadsa'} onClick={(e) => getId(e, chat.id)}>
                        <ImageSide src="https://picsum.photos/50" alt="" />
                        <NombreChat>{chat.users.filter(user => user !== usuario.email)}</NombreChat>
                    </ChatSide>

                )}
            </ConstainerChats>
        </SidebarContainer>
     );
}
 
export default Sidebar;