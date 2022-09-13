import React, { useState } from 'react'
import Mensaje from './Mensaje';

export const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState("");

    const handlePresupuesto = (e) => {
        e.preventDefault();


        if (!presupuesto || presupuesto < 0) {
            setMensaje("No es un presupuesto valido");
            return
        }
        setMensaje("")
        setIsValidPresupuesto(true)
}

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    type="number" 
                    value={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                />
                <input 
                    type="submit"
                    value="Añadir"
                />
            </div>
            { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}
