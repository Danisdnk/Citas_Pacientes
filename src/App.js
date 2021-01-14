import React, { Fragment, useState } from 'react';
import { uuid } from 'uuid/dist/v4';
import Formulario from './components/Formulario'
function App() {
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);

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

          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default App;
