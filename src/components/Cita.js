import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => (
    <div className="cita">
        <p>
            <span>Mascota: {cita.mascota}</span>
            <p><span>propietario: {cita.propietario}</span></p>
            <p><span>Sintomas: {cita.sintoma}</span></p>
            <p><span>Fecha: {cita.fecha}</span></p>
            <p> <span>Horario: {cita.hora}</span></p>
        </p>
        <button className= "button eliminar u-full-width" 
        onClick={ () => eliminarCita(cita.id)}>
            Eliminar &times;
        </button>
    </div>
);
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
  }
export default Cita;