import { useState } from "react";
function Card({nombre, describsion, boton, mensaje}) {
    const [mostrar, setMostrar] = useState(false);
      

    return (
        <article>
            <h3>{nombre}</h3>
            <p>{describsion}</p>
            {mostrar && 
            <p>{mensaje}</p>}
            <button onClick={() => setMostrar(!mostrar)}>{mostrar ? 'ver menos' : 'ver mas'}</button>

        </article>
    
    )
}

export default Card;