import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, deleteCita}) => (
    <div className="cita">
        <p>Paciente: <span>{cita.paciente}</span></p>
        <p>Edad: <span>{cita.edad}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => deleteCita(cita.id)}
        >Delete &times;</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
}
 
export default Cita;