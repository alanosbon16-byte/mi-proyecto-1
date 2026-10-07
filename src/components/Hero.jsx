function Hero() {
    function manejarClick(){
        alerta("Bienvenido, empezemos a practicar")
    }
    return (
        <section>
            <h1>Bienvenido a mi proyecto</h1>
            <p>Estoy probando</p>
            <button onClick={manejarClick}>Empezar</button>
        </section>
    )
}

export default Hero