import React, { Fragment, useState } from 'react';
import { uuid }  from 'uuidv4';
import PropTypes from 'prop-types';

const Formulario = ({ createCita }) => {
  //Crear State de Citas
  const [cita, updateCita] = useState({
    paciente: "",
    edad: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, updateError] = useState(false);

  //Funncion cuando el usuario escribe en un input
  const handleChange = (e) => {
    updateCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extrar los valores
  const { paciente, edad, fecha, hora, sintomas } = cita;

  //Cuando el usuario agrega una cita
  const handleSubmit = (e) => {
    e.preventDefault(); //No se envie por la url (Get)

    //Validar
    if (
      paciente.trim() === "" ||
      edad.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      updateError(true);
      return;
    }

    //Eliminar el mensaje previo
    updateError(false);

    //Asignar ID
    cita.id = uuid();

    //Crear Cita
    createCita(cita);

    //Reinicar el form
    updateCita({
      paciente: "",
      edad: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={handleSubmit}>
        <label>Nombre Paciente</label>
        <input
          type="text"
          name="paciente"
          className="u-full-width"
          placeholder="Nombre Paciente"
          onChange={handleChange}
          value={paciente}
        />

        <label>Edad</label>
        <input
          type="number"
          name="edad"
          className="u-full-width"
          placeholder="Ej: 18"
          onChange={handleChange}
          value={edad}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.proTypes = {
  createCita: PropTypes.func.isRequired
}

export default Formulario;
