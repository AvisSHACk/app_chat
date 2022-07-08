import { auth,createUserWithEmailAndPassword, db, doc, setDoc } from "./../firebase/firebaseConfig";
import { useState } from "react";
import {Button, FormAuth, Input, Parrafo, Enlace, TextoMensaje} from "../elementos/FormAuth";
import {useNavigate} from "react-router-dom";

const Registro = () => {
    const [userName, cambiarUsername] = useState("");
    const [email, cambiarEmail] = useState("");
    const [password, cambiarPassword] = useState("");
    const [mensaje, cambiarMensaje] = useState("");

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(userName === "" || email === "" || password === "") {
            cambiarMensaje("Ningun campo debe estar vacio");
        }

        try {
            const usuario = await createUserWithEmailAndPassword(auth, email, password);
            setDoc(doc(db, `usuarios/${usuario.user.uid}`), {
                userName: userName,
                email: email
            })
            .then(() => {
                history("/")
            })
        } catch (error) {
            let mensaje;
            switch (error.code) {
                case 'auth/weak-password':
                    mensaje = "La contraseña es muy debil, debe contener al menos 6 caracteres";
                    break;
                default:
                    mensaje = "Ha ocurrido un error al conectarse con el servidor";
                    break;
            }

            cambiarMensaje(mensaje);
        }
    }

    return ( 
        <FormAuth action="" onSubmit={handleSubmit} auth>
            <Input 
                type="text" 
                name="userName" 
                id="userName"
                placeholder="Ingresa tu usuario"
                value={userName}
                onChange={(e) => cambiarUsername(e.target.value)}
                auth
            />
            <Input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Ingresa tu correo electronico"
                value={email}
                onChange={(e) => cambiarEmail(e.target.value)}
                auth
            />

            <Input 
                type="password" 
                name="password" 
                id="email"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => cambiarPassword(e.target.value)}
                auth
            />

            <Button auth>Registrarse</Button>
            <Parrafo>¿Ya tienes una cuenta? <Enlace to={"/login"}>Inicia sesion</Enlace></Parrafo>
            <TextoMensaje>{mensaje}</TextoMensaje>
        </FormAuth>
     );
}
 
export default Registro;