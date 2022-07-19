import { useState } from "react";
import {Button, FormAuth, Input, Parrafo, Enlace, TextoMensaje} from "../elementos/FormAuth";
import {useNavigate} from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../firebase/firebaseConfig";
const Login = () => {
    const [email, cambiarEmail] = useState("");
    const [password, cambiarPassword] = useState("");
    const [mensaje, cambiarMensaje] = useState("");

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(email === "" || password === "") {
            cambiarMensaje("Ningun campo debe estar vacio");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            history("/")
        } catch (error) {
            console.log(error.code);
            let mensaje;
            switch (error.code) {
                case 'auth/weak-password':
                    mensaje = "La contraseña es muy debil, debe contener al menos 6 caracteres";
                    break;
                case 'auth/user-not-found':
                    mensaje = "El usuario no esta registrado";
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
                id="password"
                autoComplete="on"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => cambiarPassword(e.target.value)}
                auth
            />

            <Button auth>Registrarse</Button>
            <Parrafo>¿Aun no tienes uan cuenta? <Enlace to={"/registro"}>Registrate</Enlace></Parrafo>
            <TextoMensaje>{mensaje}</TextoMensaje>
        </FormAuth>
     );
}
 
export default Login;