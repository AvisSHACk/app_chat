import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../contextos/authContext";
import { ButtonAddElement } from "../elementos/ContainerApp";
import { addChat, getNameAmigo } from "../firebase/firebaseConfig";

const ButtonAdd = ({userNameUsuario}) => {
    const {usuario} = useAuth();

    const handleClick = async () => {
        const email = prompt("Añade un amigo");

        if(email !== "") {
            let userAmigo = await getNameAmigo(email);

            addChat([email, usuario.email], [userAmigo.userName, userNameUsuario]);
        }
        
    }
    return ( 
        <ButtonAddElement onClick={() => handleClick()}>
            <FontAwesomeIcon icon={faPlus}/>
        </ButtonAddElement>
     );
}
 
export default ButtonAdd;