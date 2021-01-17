import React from 'react';

const Cita = ({ cita, eliminarCita }) => (
    <div className="cita">
        <p>
            <span>Mascota: {cita.mascota}</span>
            <p><span>propietario: {cita.propietario}</span></p>
            <p><span>Sintomas: {cita.sintoma}</span></p>
            <p><span>Fecha: {cita.fecha}</span></p>
            <p> <span>Horario: {cita.horario}</span></p>
        </p>
        <button
            className="button eliminar u-full-width"
            onClick={
                () => eliminarCita(cita.id)
            }>

            Eliminar &times;
        </button>
    </div>
);

export default Cita;