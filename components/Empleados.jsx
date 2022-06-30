import React, {useState, useEffect} from 'react'


export const Empleados = React.memo( 
    ({pagina}) => {

        const [employees, setEmployees ] = useState([]);

        useEffect(()=>{

            getEmployees(pagina);

            console.log('se ha renderizado Empleados');
            
        }, [pagina] );


        const getEmployees = async(p) =>{

            const url = ('https://reqres.in/api/users?page='+p);
            const peticion = await fetch(url);
            let {data: employees} = await peticion.json();

            setEmployees(employees);

        }

        

        return (
            <div>
                <h1>La lista de empleados es : </h1>
                <ul>
                    {employees.length >= 1 ?
                        employees.map(e => {
                            return (<li key={e.id}>{e.first_name} {e.last_name}</li>)
                        })
                        : <p>Cargando ...</p>
                    }
                </ul>
            </div>
        )
    }
)

// Lo que hicimos aca fue recibir una prop con un numero, que nos ayudara a completar nuestra peticion
// Luego al completar exitosamente nuestro fetch meteremos esa data en el estado employees y entregaremos una lista por pantalla con map
// Cabe destacar que la prop que nos llega puede ser 1 o 2 y eso nos ayuda a completar nuestro fetch a cierta url

// Tambien usamos React.memo para no tener renderizacion innecesaria en caso que haya algun cambio en el componente padre (Gestion) y en este componente no haya cambios.

//Tambien usamos useEffect para indicar que la peticion se vuelva a ejecutar cada vez que la prop pagina cambie su valor

//Comentario distintivo