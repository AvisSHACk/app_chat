import {Link} from "react-router-dom";
import styled, { css } from "styled-components";

const FormAuth = styled.form`
    display: flex;
    flex-direction: column;
    margin-left:auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-bottom: 2rem;
    width: 100%;

    ${({auth}) => auth && css`
        width: 80%;
        padding-top: 8rem;
    `}
    
`

const Input = styled.input`
    display: block;
    padding:1rem;
    font-size:1.7rem;
    width: 100%;
    border-bottom: 1px solid #7540ed;
    color:#fff;
    margin-bottom: 1rem;

    ${({auth}) => auth && css`
        padding:2.5rem;
        font-size:1.8rem;
        margin-bottom: 2rem;
    `}
`

const Button = styled.button`
    padding:1rem 2rem;
    border-radius: 12px;
    background-color:#f85179;
    color:#fff;
    cursor: pointer;
    
    ${({auth}) => auth && css`
        padding:2.5rem;
        
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