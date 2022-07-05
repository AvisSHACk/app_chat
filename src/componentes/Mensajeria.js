import { 
    ButtonMensaje, 
    ChatBox, 
    FormMensaje, 
    HeaderMensjeria, 
    InputMensaje, 
    Mensajes, 
    MensajesContainer, 
    MyMensaje, 
    YourMensaje 
} from "../elementos/ContainerApp";

const Mensajeria = () => {
    return ( 
        <MensajesContainer>
            <HeaderMensjeria>
                <h2>Daniela</h2>
            </HeaderMensjeria>
            <Mensajes>
                <MyMensaje>Lorem ipsum dolor sit amet consectetur adipisicing elit.</MyMensaje>
                <YourMensaje>Lorem ipsum dolor sit amet consectetur adipisicing elit.</YourMensaje>
            </Mensajes>
            <ChatBox>
                    <FormMensaje action="">
                        <InputMensaje type="text" name="mensaje" id="mensaje" placeholder="Escribe tu mensaje"/>
                        <ButtonMensaje>Enviar</ButtonMensaje>
                    </FormMensaje>
                </ChatBox>
        </MensajesContainer>
     );
}
 
export default Mensajeria;