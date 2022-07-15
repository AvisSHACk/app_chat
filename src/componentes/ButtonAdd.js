import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "../contextos/authContext";
import { ButtonAddElement } from "../elementos/ContainerApp";
import { db } from "../firebase/firebaseConfig";

const ButtonAdd = ({userNameUsuario}) => {
    const {usuario} = useAuth();

    const getNameAmigo = async (email) => {
        let userAmigo = "";
        const q = query(collection(db, "usuarios"), where('email', '==', `${email}` ));
        const consulta = await getDocs(q);

        consulta.forEach((doc) => {
            userAmigo = doc.data();
        });

        return userAmigo;
    }
    const handleClick = async (e) => {
        const email = prompt("Añade un amigo");

        if(email !== "") {
            let userAmigo = await getNameAmigo(email);

            addDoc(collection(db, "chats"), {
                users: [email, usuario.email],
                userAmigo: [userAmigo.userName, userNameUsuario] 
            })
        }
        
    }
    return ( 
        <ButtonAddElement onClick={() => handleClick()}>
            <FontAwesomeIcon icon={faPlus}/>
        </ButtonAddElement>
     );
}
 
export default ButtonAdd;