import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Frase(props) {
  return (
    <div className="frase">
      <h1>{props.frase.quote}</h1>
    </div>
  )
}


function App() {

  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {

    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    console.log(resultado.data[0]);
    // agregar el resultado de la Api al state; (similar a this.setState)
    obtenerFrase(resultado.data[0]);

  }

  useEffect(
    () => {
      consultarAPI()
    }, []
  )

  console.log(frase);

  return (
    <div className="contenedor">
      <Frase 
        frase={frase}
      />
      <button
        onClick={consultarAPI}
      >Generar Nueva</button>
    </div>
    )
}

export default App;
