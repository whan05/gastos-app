import React from 'react'

export const NuevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    type="text" 
                />
                <input 
                    type="submit"
                    value="Añadir"
                />
            </div>
        </form>
    </div>
  )
}
