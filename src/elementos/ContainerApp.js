import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ContainerApp = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
`

const SidebarContainer = styled.aside`
    width: 30%;
    border-right:1px solid #666b91;
    padding: 1.5rem 1rem;
`

const MensajesContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    `

const HeaderMensjeria = styled.header`
    display: flex;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 10%;
    border-bottom:1px solid #666b91;
    
`

const Mensajes = styled.div`
    height: 80%;
    padding-right: 2rem;
    padding-left: 2rem;
    display:flex;
    flex-direction: column;
`

const MyMensaje = styled.p`
    background-color: #7540ed;
    padding: 1.2rem;
    display: inline-block;
    border-radius: 20px;
    margin-left: auto;

    ${({propiedad}) => propiedad && css`
        background-color: #454964;
        margin-left:0;
        margin-right:auto;
    `}
`

const YourMensaje = styled(MyMensaje)`
    background-color: #454964;
    margin-left:0;
    margin-right:auto;
`

const ChatBoxContainer = styled.div`
    padding-right: 2rem;
    padding-left: 2rem;
    height: 10%;
`

const FormMensaje = styled.form`
    display:flex;
    justify-content: space-between;
`

const InputMensaje = styled.input `
    border:1px solid #666b91;
    width: 92%;
    padding: 1.5rem 1rem;
`

const ButtonMensaje = styled.button`
    background-color: #f85179;
`

const ChatSide = styled(Link)`
    display: flex;
    align-items: center;
    background-color:#454964;
    padding: 1.5rem 1rem;
    border-radius: 12px;
`

const ImageSide = styled.img`
    border-radius: 50%;
`

const NombreChat = styled.h4`
    margin-left:1rem;
`

export {
    ContainerApp, 
    MensajesContainer, 
    SidebarContainer, 
    HeaderMensjeria, 
    Mensajes, 
    ChatBoxContainer,
    InputMensaje,
    FormMensaje,
    ButtonMensaje,
    MyMensaje,
    YourMensaje,
    ChatSide,
    ImageSide,
    NombreChat
};