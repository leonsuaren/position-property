import React from 'react';
import './styles.css';

/**
 * Usando la propiedad Sticky, colocar la frase "Hello World" en el centro de la pantalla por medio de desplazar la pantalla de izquierda a derecha
 * cada letra de la frase en cuestion debera de irse colocando en el lado izquierdo de la pantalla de forma que una a una vayan formando la frase completa,
 * es decir, la pantalla debera estar en blanco y por medio de el desplazamiento de la pantalla de izquierda a derecha deberan de ir apareciendo cada una de las letras de la 
 * frase en cuestion, en este caso, primero debera aparecer la letra "H" y al momento de llegar al lado mas ala izquierda de la pantalla esta letra se debera de detener 
 * y subsecuentemente le seguira la letra "e", asi sucesivamente hasta llegar a la ultima letra.
 */

/**
 * PASOS A SEGUIR
 * lograr que la pantalla tenga las dimanesiones necesarias horizontalmente para contener la frase separando las letras entre se lo suficiente para no aparacer si no hasta que su letra 
 * predecesora se detenga
 * Colocar en el centro de la pantalla el elemento que contendra la frase y darle la dimensiones correspondientes
 * Separar la frase en letras para individualmente colocarlas en la posicion deseada
 * darle a las letras pariencia y dimensiones similares
 */

export const Sticky = () => {
  return (
    <div className='main-contaniner'>
      <h1 className='frase-style'>H</h1>
      <h1 className='frase-style'>E</h1>
      <h1 className='frase-style'>L</h1>
      <h1 className='frase-style'>L</h1>
      <h1 className='frase-style'>O</h1>
      <h1 className='frase-style'> &nbsp;</h1>
      <h1 className='frase-style'>W</h1>
      <h1 className='frase-style'>O</h1>
      <h1 className='frase-style'>R</h1>
      <h1 className='frase-style'>L</h1>
      <h1 className='frase-style'>D</h1>
    </div>
  )
}