import React, {useState } from 'react';

const Formulario = (props) => {
    const [firstName, setFirstName] =  useState("");
    const [lastName, setLastName] =  useState("");
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");
    const [password2, setPassword2] =  useState("");

    const createUser = (e) => {
        //previene el refrescar la pagina
        e.preventDefault();
        const newUser= {firstName, lastName, email, password, password2};
        console.log("Bienvenido", newUser); 
    };

    return(
        <form onSubmit={createUser}>
            <div>
                <label>Primer Nombre:</label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Segundo Nombre:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password :</label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Password 2:</label>
                <input type="password" onChange={ (e) => setPassword2(e.target.value)}/>
            </div>
        </form>
    )
}

export default Formulario;