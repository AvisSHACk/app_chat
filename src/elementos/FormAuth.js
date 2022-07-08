import {Link} from "react-router-dom";
import styled, { css } from "styled-components";

const FormAuth = styled.form`
    display: flex;
    flex-direction: column;
    margin-left:auto;
    margin-right: auto;
    width: 80%;
    margin-top: 8rem;

    ${({app}) => app && css`
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    `}
    
`

const Input = styled.input`
    display: block;
    padding:2.5rem;
    font-size:1.8rem;
    width: 100%;
    border-bottom: 1px solid #7540ed;
    color:#fff;
    margin-bottom: 2rem;

    ${({app}) => app && css`
        padding:1rem;
    `}
`

const Button = styled.button`
    padding:2.5rem;
    border-radius: 12px;
    background-color:#f85179;
    color:#fff;
    cursor: pointer;

    ${({app}) => app && css`
        padding:1rem 2rem;
    `}
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