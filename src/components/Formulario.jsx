import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';
const Formulario = ({ crearCita }) => {
  //crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    sintoma: '',
    fecha: '',
    hora: '',
  });
  const [error, actualizarError] = useState(false);


  const actualizarState = e => {
    // console.log('escribiendo...');
    actualizarCita({
      ...cita, //guardo la referencia anterior del state para no perderla
      [e.target.name]: e.target.value //guardo en mi objeto mi value
    })
  }
  const { mascota, propietario, sintoma, fecha, hora } = cita

  //validar
  const submitCita = e => {
    e.preventDefault();
    if (mascota.trim() === '' || propietario.trim() === '' || sintoma.trim() === '' || fecha.trim() === '' || hora.trim() === '') {
      actualizarError(true);
      return
    }
    //si la validacion es correcta el state se actualiza a "sin errores"
    actualizarError(false);
    //asignar cita UUID genera un id unico para cada cita.id
    cita.id = uuid();
    //crear cita
    crearCita(cita);
    //reiniciar cita
    actualizarCita({
      mascota: '',
      propietario: '',
      sintoma: '',
      fecha: '',
      hora: '',
    });
  }

  return (
    <Fragment>
      <h1>Crear cita</h1>
      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
      <form
        onSubmit={submitCita}>
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
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de las mascota"
          value={propietario}
          onChange={actualizarState} />
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
        <input type="time" name="hora" className="u-full-width" value={hora} onChange={actualizarState}
        />

        <button type="submit" className="u-full-width button-primary" >
          Crear cita
        </button>
      </form>
    </Fragment>

  );
}
//ejemplo de documentacion

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}
export default Formulario;