import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  //Citas en local storage
  let citasStore = JSON.parse(localStorage.getItem('citas'));
  if(!citasStore) {
    citasStore = [];
  }

  //Arreglo de ctas
  const [citas, saveCitas] = useState(citasStore);

  //useEffect para ciertas operaciones del state, actua cuando [citas] cambia
  useEffect( () => {
    if(citasStore) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasStore] );

  //Funcion que agrege las nueva cita a las anteriores
  const createCita = (cita) => {
    saveCitas([
      ...citas, 
      cita
    ]);
  };

  //Funcion elimnar cita por id
  const deleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id)
    saveCitas(newCitas);
  }

  //Si no hay citas
  const notCita = citas.length === 0 ? 'No hay Citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>{notCita}</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                deleteCita={deleteCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
