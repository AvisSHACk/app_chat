import styled, { css } from "styled-components";

const ContainerApp = styled.div`
    @media screen and (min-width: 900px) {
        display: flex;
        justify-content: space-between;
    }
    height: 100%;
`

const SidebarElement = styled.aside`
    position: absolute;
    left: -100%;
    border-right:1px solid #666b91;
    transition: left .3s;
    background-color: #2e3148;
    width: 80%;
    height: 100%;
    ${({buttonMobile}) => buttonMobile && css`
        left: 0;
    `}

    @media screen and (min-width: 900px) {
        position: static;
        width: 25%;
    }

`

const SidebarContainer = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const ConstainerChats = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
    position:relative;
`

const HeaderSidebarElement = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left:1.5rem;
    padding-right:1.5rem;
    border-bottom:1px solid #666b91;
`

const MensajesContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    @media screen and (min-width: 900px) {
        width: 80%;
    }
`

const HeaderMensjeria = styled.header`
    display: flex;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 10%;
    border-bottom:1px solid #666b91;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
`

const Mensajes = styled.div`
    height: 80%;
    padding-right: 2rem;
    padding-left: 2rem;
    display:flex;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #f85179;
        border-radius: 12px;
    }
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
    height:100%;
    padding-top: .8rem;
    padding-bottom: .8rem;
`

const InputMensaje = styled.input `
    border:1px solid #666b91;
    width: 100%;
    padding: 1rem;
    color:#fff;
`

const ButtonMensaje = styled.button`
    background-color: #7821c7;
    cursor: pointer;
    color:#fff;

    ${({marginleftright}) => marginleftright && css`
        margin-left: auto;
        margin-right: 1rem;
    `}
    ${({marginleft}) => marginleft && css`
        margin-left: 1rem;
    `}
`

const ButtonElement = styled(ButtonMensaje)`
    padding:1rem 1.2rem;
    border-radius: 50%;
`

const ButtonAddElement = styled(ButtonElement)`
    position:absolute;
    padding:0;
    width: 50px;
    height:50px;
    line-height: 50px;
    bottom:5%;
    right:5%;
    background-color: #f85179;
`

const ChatSideElement = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem;
    border-top:1px solid #1f2444;
    cursor: pointer;

    &:hover {
        background-color:#393c52;
    }

    ${({activo}) => activo && css`
        background-color:#454964;
        &:hover {
            background-color:#454964;
        }
    `}

`

const ImageSide = styled.img`
    border-radius: 50%;
    margin-right:1rem;
`

const NombreChat = styled.h4`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const TitleSidebar = styled.h2`
    padding-top:2rem;
    padding-bottom: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
    ${({paddingLeftRight}) => paddingLeftRight && css`
        border-bottom:1px solid #666b91;
        padding-left:1.5rem;
        padding-right: 1.5rem;
    `}
`

export {
    ContainerApp, 
    MensajesContainer,
    SidebarElement,
    SidebarContainer, 
    HeaderMensjeria, 
    Mensajes, 
    ChatBoxContainer,
    InputMensaje,
    FormMensaje,
    ButtonMensaje,
    MyMensaje,
    YourMensaje,
    ChatSideElement,
    ImageSide,
    NombreChat,
    ConstainerChats,
    HeaderSidebarElement,
    TitleSidebar,
    ButtonAddElement,
    ButtonElement
};