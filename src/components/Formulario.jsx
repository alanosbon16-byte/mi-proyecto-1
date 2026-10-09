    import { useState } from "react";
    
    function Formulario() {
        const [datos,seDatos] = useState (false)

        const validar = () => {
            const nuevos = {}

            if (datos.nombre.trin().length < 3){
                nuevos.nombre = "El nombre debe tener al menos 3 letras"
            }

            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!regexCorreo.test(datos.correo)){
                nuevos.correo = "Escribe un correo valido"
            }

            if (datos.mensaje.trim().length < 10){
                nuevos.mensaje = "El mensaje debe tener almenos 10 caracteres"
            }

            return nuevos

        }

        const handleChange = (e) => {
            setDatos ({ ...datos, [e.traget.name]: e.traget.value})
                setEnviado(false)
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const nuevos = validar ()
            setErrores(nuevos)

            if (Object.keys(nuevos).length === 0) {
                console.log ("Datos enviados: ", datos)
                setEnviado(true)
                setDatos({ nombre: "", correo: "", mensaje: ""})
            }
        }


         return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Nombre</label>
        <input name="nombre" value={datos.nombre} onChange={handleChange} />
        {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
      </div>

      <div>
        <label>Correo</label>
        <input name="correo" value={datos.correo} onChange={handleChange} />
        {errores.correo && <p style={{ color: 'red' }}>{errores.correo}</p>}
      </div>

      <div>
        <label>Mensaje</label>
        <textarea name="mensaje" value={datos.mensaje} onChange={handleChange} />
        {errores.mensaje && <p style={{ color: 'red' }}>{errores.mensaje}</p>}
      </div>

      <button type="submit">Enviar</button>
      {enviado && <p style={{ color: 'green' }}>Formulario enviado</p>}
    </form>
  )
}

export default Formulario