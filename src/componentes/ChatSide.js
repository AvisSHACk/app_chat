import { useEffect, useState } from "react";
import { ChatSideElement, ImageSide, NombreChat } from "../elementos/ContainerApp";
const ChatSide = ({chat, getId, usuario, activo, cambiarbuttonMobile}) => {
    const [userAmigo, cambiarUserAmigo] = useState();
    const handleClick = (e) => {
        getId(e, chat.id);
        cambiarbuttonMobile(false);
    }

    useEffect(() => {
        cambiarUserAmigo(
            chat.userAmigo.filter(userName => userName !== usuario.userName)[0]
        )
    }, [chat, usuario])

    return ( 
        <ChatSideElement onClick={(e) => handleClick(e)} activo={activo}>
            <ImageSide src="https://picsum.photos/50" alt="" />
            <NombreChat>{userAmigo}</NombreChat>
        </ChatSideElement>
     );
}
 
export default ChatSide;