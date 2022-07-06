import {collection, db} from "./../firebase/firebaseConfig";
import {onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

const useChat = () => {
    return useContext(ChatContext);
}

const ChatProvider = ({children}) => {
    const [chats, cambiarChats] = useState([]);
    const [cargando, cambiarCargando] = useState(true);

    useEffect(() => {
        const getChats = () => {
            const onSuscribe = onSnapshot(collection(db, "chats"),
            (snapshot) => {
    
                cambiarChats(snapshot.docs.map((chat) => {
                    return {...chat.data(), id: chat.id, }
                }))
                cambiarCargando(false);
                return onSuscribe;
    
            });
        }

        
        getChats();
    }, [])

    return (
    
        <ChatContext.Provider value={{chats: chats}}>
            {!cargando && children}
        </ChatContext.Provider>
    )
}

export {ChatContext, useChat, ChatProvider}