import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const servicio = [
    {
        nombre: "diseño web",
        describsion: "creaccion de ",
        boton: "ver mas",
        mensaje: "Este es un mensaje adicional que se muestra al hacer clic en el botón"
    }

    {
  

    }
  ]
  return (
    <div>
      <Navbar />
      <Hero />
      <section>
        {servicio.map((servicio, index) => (
          <Card
            nombre={servicio.nombre}
            describsion={servicio.describsion}
            boton={servicio.boton}
            mensaje={servicio.mensaje}
            key={index}
          />
        ))
            }
      </section>
      <Footer />
      
    

    </div>
  )
}

export default App