import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './formulario.css';

const Formulario = ({crearCita}) => {

        const [cita, setcita] = useState({

                mascota:'',
                propietarix:'',
                fecha:'',
                hora:'',
                sintomas:''

        });

        const [error, setError ] = useState(false);


        const handleChange = e => {
               setcita({
                       ...cita,
                       [e.target.name] : e.target.value
               })
        }

        const { mascota, propietarix, fecha, hora, sintomas } = cita;

        const submitCita = e =>{
                e.preventDefault();

                if (mascota.trim() === '' || propietarix.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
                        setError(true);
                        return;
                }
                setError(false);

                cita.id = uuidv4();
                
                crearCita(cita);

                setcita({
                        mascota:'',
                        propietarix:'',
                        fecha:'',
                        hora:'',
                        sintomas:''
                })



                

        }






    return ( 
        <Fragment>
            <h1>Citas</h1>

                { error ? 
                <p className="alert" variant="danger">Tienes que completar todos los campos!</p> 
                : 
                null}
            

            <form       onSubmit={submitCita}   
            
            >
                <label>Nombre mascota</label>
                <input  type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="Nombre mascota"
                        onChange={handleChange}
                        value={mascota}
                
                />

                <label>Nombre Dueño/a</label>
                <input  type="text"
                        name="propietarix"
                        className="u-full-width"
                        placeholder="Nombre dueñx de la mascota"
                        onChange={handleChange}
                        value={propietarix}
                
                />

                <label>Fecha</label>
                <input  type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={handleChange}
                        value={fecha}
                        
                       
                
                />

                <label>Hora</label>
                <input  type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={handleChange}
                        value={hora}
                        
                
                />

                <label>Síntomas</label>
                <textarea   className="u-full-width"
                            name="sintomas"
                            onChange={handleChange}
                            value={sintomas}

                    ></textarea>
                
                <button type="submit"
                        className="u-full-width button"
                        
                >Pedir turno</button>

            </form>






        </Fragment>
        );
}

Formulario.propTypes = {
        crearCita: PropTypes.func.isRequired
}
      
 
export default Formulario;
