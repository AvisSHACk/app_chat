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
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import filterEmailFriend from "./../functions/filterEmailFriend";


const Sidebar = ({chats, cambiarIdChat, buttonMobile, cambiarbuttonMobile}) => {
    const [emailAmigo, cambiarEmailAmigo] = useState("");
    const [usuarioLogeado, cambiarUsuarioLogeado] = useState({});
    const {usuario} = useAuth();
    
    const cerrarSesion = () => {
        signOut(auth);
    }

    useEffect(() => {
        const infoUsuario = async () => {
            const docRef = doc(db, `usuarios/${usuario.uid}`);
            const docSnap = await getDoc(docRef)
            cambiarUsuarioLogeado(docSnap.data());
        }

        infoUsuario();
    })



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

    const cerrarSidebar = () => {
        cambiarbuttonMobile(false)
    }
    
    return ( 
        <SidebarContainer buttonMobile={buttonMobile}>
            <HeaderSidebar>
                <h3>{usuarioLogeado.userName}</h3>
                <ButtonMensaje onClick={cerrarSesion}>Cerrar sesion</ButtonMensaje>
                <ButtonMensaje onClick={cerrarSidebar}>Cerrar Menu</ButtonMensaje>
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
                {filterEmailFriend(chats, usuario.email).map((chat) => 
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