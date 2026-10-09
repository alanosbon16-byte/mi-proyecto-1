import { useEffect, useState } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setUsuarios(datos);
      });
  }, []);

  return (
    <section>
      <h2>Usuarios</h2>

      {usuarios.map((usuario) => (
        <p key={usuario.id}>{usuario.name}</p>
      ))}
    </section>
  );
}

export default Usuarios;