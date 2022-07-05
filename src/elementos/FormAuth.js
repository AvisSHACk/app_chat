import {Link} from "react-router-dom";
import styled from "styled-components";

const FormAuth = styled.form`
    display: flex;
    flex-direction: column;
    margin-left:auto;
    margin-right: auto;
    width: 80%;
    margin-top: 8rem;
`

const Input = styled.input`
    display: block;
    padding:2.5rem;
    font-size:1.8rem;
    width: 100%;
    border-bottom: 1px solid #7540ed;
    color:#fff;
    margin-bottom: 2rem;
`

const Button = styled.button`
    padding:2.5rem;
    border-radius: 12px;
    background-color:#f85179;
    color:#fff;
    cursor: pointer;
`

const Parrafo = styled.p`
    text-align: center;
`

const Enlace = styled(Link)`
    color:#f85179;
`

const TextoMensaje = styled.p`
    text-align: center;
`


export { FormAuth, Input, Button, Parrafo, Enlace, TextoMensaje };