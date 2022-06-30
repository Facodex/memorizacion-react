import React, { useState, useRef, useEffect }from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre ] = useState('');

    const [pagina, setPagina] = useState(1);
    
    useEffect(()=>{
      console.log('se ha renderizado Gestion');
    }, [pagina, nombre]);



    let gestor = useRef('');

    const cargar = e =>{
        setNombre(gestor.current.value);
    }

    


  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>

        <input type="text" ref={gestor} onChange={cargar} placeholder="nombre"/>

        <h2>Listado de empleados:</h2>
        <p>Los usuarios son gesionados por {nombre} vienen de jsonplaceholder...</p>

        <button onClick={() => { setPagina(1) } }>Pagina 1</button>
        <button onClick={() => { setPagina(2) } }>Pagina 2</button>
        <Empleados pagina={pagina}/>
    </div>
  )
}

// Lo que hicimos aca fue: ir completando el titulo con el valor que vamos insertando el input gracias a onChange, y ese valor lo capturamos gracias que le dimos una refencia a ese Input
// Luego creamos una const pagina para pasarsela por parametro por tag al componente Empleados

//Tambien creamos dos botones para ir cambiando esa const pagina y tener la posibilidad de que esa prop que le llega al componente Empleados pueda ir cambiando tambien

//Comentario distintivo