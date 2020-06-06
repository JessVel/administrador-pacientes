import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Cita from './componentes/Cita';
import Footer from './componentes/Footer';


function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState([]);

  const crearCita = cita => {
    guardarCitas([
            ...citas,
            cita
    ]);
  }

  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

useEffect( () =>{
  if(citasIniciales){
    localStorage.setItem('citas', JSON.stringify(citas))
  }else {
    localStorage.setItem('citas', JSON.stringify([]));
  }

}, [citas, citasIniciales] );


  return (
    <Fragment>
   <h1>Administrador de pacientes</h1>

   <div className="container">
     <div className="row">
       <div className="one-half column">
        <Formulario crearCita={crearCita}
        
        />
       </div>
       <div className="one-half column">
        <h2>{titulo}</h2>
        {citas.map(cita => (
          <Cita key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}

          />
        ))}

       </div>
     </div>
   </div>
          <Footer />
   </Fragment>
  );
}


export default App;
