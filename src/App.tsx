import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import Usuarios from './components/Usuarios'

function App() {
  const servicio = [
    {
      nombre: "diseño web",
      describsion: "creaccion de ",
      boton: "ver mas",
      mensaje: "Este es un mensaje adicional que se muestra al hacer clic en el botón"
    }, 
    {
      nombre: "desarrollo web",
      describsion: "creación de aplicaciones",
      boton: "ver mas",
      mensaje: "Otro mensaje de prueba"
    }
  ]

  return (
    <div>
      <Navbar />
      <Hero />
      <Formulario />
     

      <section>
        {servicio.map((item, index) => (
          <Card
            nombre={item.nombre}         
            describsion={item.describsion}  
            boton={item.boton}           
            mensaje={item.mensaje}       
            key={index}
          />
        ))}
      </section>

      <Usuarios />

      <Footer />
    </div>
  )
}

export default App