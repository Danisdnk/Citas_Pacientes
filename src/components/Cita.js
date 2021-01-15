import React from 'react';

const Cita = ({cita}) => (
    <div className="cita">
        <p>
            <span>Mascota: {cita.mascota}</span>
           <p><span>propietario: {cita.propietario}</span></p> 
           <p><span>Sintomas: {cita.sintoma}</span></p>
           <p><span>Fecha: {cita.fecha}</span></p>
           <p> <span>Horario: {cita.horario}</span></p>

        </p>
    </div>
);

export default Cita;