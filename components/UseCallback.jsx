import React, { useCallback } from 'react'
import { useState } from 'react'

export const UseCallback = () => {
    const [numero, setNumero] = useState(1);

    const sumar = useCallback(() =>{
        setNumero(numero+1);
        console.log('soy el numero :'+numero);
    }, [numero]);

  return (
    <div>
        <h1>soy el numero: {numero}</h1>
        <button onClick={sumar}>sumar</button>
    </div>
  )
}

//Comentario distintivo