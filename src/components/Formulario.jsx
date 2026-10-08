    import { useState } from "react";
    
    function Formulario() {
        const [nombre, setNombre] = useState("");
        const [correo, setCorreo] = useState("");
        const [contrasena, setContrasena] = useState("");
        
        function registrar (e) {
            e.preventDefault();
            alert("Registro exitoso " + nombre);

            console.log("Nombre:", nombre);
            console.log("Correo:", correo);
            console.log("Contraseña:", contrasena);
        }
    
    return(
        <section>
            <h2>Registro</h2>
            <form onSubmit={registrar}>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                id="nombre"    
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                type="text" 
                placeholder="Ingrese su nombre"
                required
                /> 
                

                <label htmlFor="correo">Correo:</label>
                <input 
                id="correo"
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)} 
                type="email" 
                placeholder="Ingrese su correo"
                required
                />   
                

                <label htmlFor="contrasena">Contraseña:</label>
                <input 
                id="contrasena"
                value={contrasena} 
                onChange={(e) => setContrasena(e.target.value)} 
                type="password" 
                placeholder="Ingrese su contraseña"
                required
                />
               

                <button type="submit">Registrar</button>

            </form>
        </section>
    );
}

export default Formulario;