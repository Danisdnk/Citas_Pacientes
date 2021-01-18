import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from "./components/Cita";
//import uuid from 'uuid/dist/v4';

function App() {
  const [citas, guardarCitas] = useState([]);


  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);

  }
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administrar tus citas'

  useEffect(() => {
    console.log("preparando localstorage");
  }, [citas]);


  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas);
  }
  return (
    <Fragment>
      <h1>Citas Medicas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2> {titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />

            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default App;
