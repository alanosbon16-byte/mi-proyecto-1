import React from "react";
function Hero() {
    function manejarClick(){
        alert("Bienvenido, empezemos a practicar")
    }
    return (
        <section>
            <h1>Bienvenido a mi proyecto</h1>
            <p>Estoy probando</p>
            <button onClick={manejarClick}>comenzar</button>
        </section>
    )
}

export default Hero;