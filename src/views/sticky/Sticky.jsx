import React from 'react';
import { PiceOfCode } from '../../components/pice-of-code';
import { DisplayWindow } from '../../components/display-window';
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
    <div className='wrapper'>
      <h1 className='title'>Sticky</h1>
      <p>An element with <span className='code-on-paragraph'>position: sticky;</span>  is positioned based on the user's scroll position.</p>
      <p>A sticky element toggles between <span className='code-on-paragraph'>relative</span> and <span className='code-on-paragraph'>fixed</span>, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).</p>
      <p>The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of <span className='code-on-paragraph'>top</span>, <span className='code-on-paragraph'>right</span>, <span className='code-on-paragraph'>bottom</span>, and <span className='code-on-paragraph'>left</span>. The offset does not affect the position of any other elements.</p>
      <p className='example-text'>Example: </p>
      <PiceOfCode>
        <p className='element-name'>.element <span className='opening-curly-bracket'>&#123;</span></p>
        <p>
          <span className='element-property'>position: <span className='element-value'>sticky;</span></span>
          <span className='element-property'>top: <span className='element-value'>0;</span></span>
          <span className='element-property'>width: <span className='element-value'>100%;</span></span>
          <span className='element-property'>background-color: <span className='element-value'>turquoise;</span></span>
          <span className='closing-curly-bracket'>&#125;</span>
        </p>
      </PiceOfCode>
      <DisplayWindow headerTitle='CSS-Sticky scroll'>
        <div className='overflow-section'>
          <p>Try to <b>scroll</b> inside this frame to understand how sticky positioning works.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <div className="sticky">I am sticky!</div>
          <div>
            <p>In this example, the sticky element sticks to the top of the page (top: 0), when you reach its scroll position.</p>
            <p>Scroll back up to remove the stickyness.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          </div>
        </div>
      </DisplayWindow>
      <p>On this example, the element, I am sticky (with a background turquoise), it's goin to sticky on top, <span className='code-on-paragraph'>top: 0;</span>, of the page as soon as it reaches the top .</p>
    </div>
  )
}