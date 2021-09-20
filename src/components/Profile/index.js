import React from "react";

function Profile (props) {
    return ( 
        <div>
        <p> Nome: {props.name}  </p>
        <p> WhatsApp: {props.zap} </p>
        <p> E-mail: {props.email} </p>
        <p> CPF: {props.cpf} </p>
        <p> Data de Aniversário: {props.aniversario} </p>
        </div>
    );
}

export default Profile;