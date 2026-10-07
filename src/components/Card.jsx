function Card() {
    function manejarClick(){
        alerta("Hola, este mensaje por defecto")        
    }
    return (
        <div>
            <h3>Titulo de algo</h3>
            <p>Aqui su decripcion</p>
            <button onClick={manejarClick}>ver mas</button>
        </div>
        
    )
}

export default Card