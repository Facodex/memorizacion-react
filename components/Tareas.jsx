import React, { useState, useRef, useMemo, useEffect } from 'react'
import { deberes } from '../data/deberes'

export const Tareas = () => {

    const [tareas, setTareas] = useState([...deberes]);
    const [contador, setContador] = useState(5);

    useEffect(()=>{
        console.log(tareas);
    }, [tareas]);


    const nombre = useRef();
    const descripcion = useRef();


    const getTarea = (e) => {
        e.preventDefault();

        let newTarea = {
            id: new Date().getTime(),
            nombre: nombre.current.value,
            descripcion: descripcion.current.value
        }

        let tareasActualizadas = [...tareas, newTarea];

        setTareas(tareasActualizadas);

    }

    const eliminar = id => {
        let nuevasTareas = tareas.filter((tarea, indice) => indice !== id);

        setTareas(nuevasTareas);
    }


    // funcion sumar que tendra el hook useMemo 
    const sumar = () =>{
        setContador(contador +1);
    }

    const contadoresPasados = (acumulacion) =>{
        for(let i = 0; i <= acumulacion; i++){
            console.log('este es el numero: '+acumulacion);
        }
        return `Contador manual de tareas: ${acumulacion}`;
    }

    // aqui la magia del useMemo, sin esto la funcion se ejecutaria siempre que se renderice el componente, algo similar al useEffect
    const MemoContador = useMemo(() => contadoresPasados(contador), [contador]);

  return (
    <div>
        <h2>{MemoContador}</h2>
        <button onClick={sumar}>Sumar</button>

        <h1>Tareas del colegio</h1>

        <ul>
            {
                tareas.map((t, indice) =>{
                    return (
                        <li key={indice}> {t.nombre} - {t.descripcion}
                            &nbsp; 
                            <button onClick={() => eliminar(indice)}>X</button>
                        </li>
                        
                    
                    )
                })
            }
        </ul>

        <form id='formTareas' onSubmit={getTarea}>
            <input type="text" ref={nombre} placeholder="materia" />
            <input type="text" ref={descripcion} placeholder="descripcion" />

            <input type="submit" value='Agregar'/>
        </form>
        <hr/>
    </div>
  )
}

// Lo que hicimos aca fue: importamos un array desde otro archivo,
// crear un estado y rellenarlo con ese array que importamos
// recorrerlo y mostrarlo en una lista por JSX
// Luego creamos un formulario para inotrducirle mas objetos a ese array
// Con los input usamos las referencias para sacarle el valor
// Luego creamos la funcion que haria posible guardad ese nuevo objeto, actualizar el estado y mostrar por pantalla el estado actualizado
// Y por ultimo hemos creado una funcion para eliminar usando un filter y guardando todos los objetos menos el que el id coincide con el que se quiere eliminar


// Luego hicimos una pequeña funcion para sumarle 1 a un estado (contador)
// Luego con el hook useMemo lo que hicimos fue garantizar que se ejecute la funcion contadoresPasados solo cuando se actualice el estado (contador).

//Comentario distintivo