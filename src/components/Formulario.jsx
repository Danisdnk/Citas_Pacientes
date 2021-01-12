import React, { Fragment, useState } from 'react';
const Formulario = () => {
  //crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });
  const actualizarState = e => {
    console.log('escribiendo...');
    actualizarCita({
      ...cita, //guardo la referencia anterior del state para no perderla
      [e.target.name]: e.target.value //guardo en mi objeto mi value
    })
  }
  const { mascota, propietario, sintoma, fecha, hora } = cita
  return (
    <Fragment>
      <h1>Crear cita</h1>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={mascota}
          onChange={actualizarState}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="priopetario"
          className="u-full-width"
          placeholder="Nombre Dueño de las mascota"
          value={propietario}
          onChange={actualizarState}
        />
        <label>sintomas</label>
        <input
          type="text"
          name="sintoma"
          className="u-full-width"
          placeholder="sintoma de la mascota"
          value={sintoma}
          onChange={actualizarState}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={actualizarState}
        />
        <label>Horario</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={actualizarState}
        />

        <button
          type="submit"
          className="u-full-width button-primary"
        >
          Crear cita
        </button>
      </form>
    </Fragment>

  );
}

export default Formulario;