import { useAuth } from "../contextos/authContext";
import {Outlet, Navigate} from "react-router-dom";

const RutasProtegidas = () => {
    const {usuario} = useAuth();
    
    if(usuario) {
       return <Outlet /> 
    } else {
        return <Navigate to={"login"}/>
    }
}

export default RutasProtegidas;