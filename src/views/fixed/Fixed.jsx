import React from 'react';
import { PiceOfCode } from '../../components/pice-of-code';
import { DisplayWindow } from '../../components/display-window';
import './styles.css';

export const Fixed = () => {
  return (
    <div className='wrapper'>
      <h1 className='title'>Position Fixed</h1>
      <p>
        The <spna className='code-on-paragraph'>fixed</spna> value is similar to <spna className='code-on-paragraph'>absolute</spna> as it can help you position an element anywhere relative to the document, however this value is unaffected by scrolling.
      An element with <spna className='code-on-paragraph'>position: fixed;</spna> is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The <span className='code-on-paragraph'>top</span>, <span className='code-on-paragraph'>right</span>, <span className='code-on-paragraph'>bottom</span>, and <span className='code-on-paragraph'>left</span> properties are used to position the element.
      </p>
      <p>
        A fixed element does not leave a gap in the page where it would normally have been located.
      </p>
      <p className='example-text'>Example: </p>
      <p className='example-text'>CSS </p>
      <img src='css-fixed-example.png' />
      <p className='example-text'>HTML </p>
      <img src='./fixedexample.png' />
      <DisplayWindow headerTitle='CSS-Sticky'>
        <div className='overflow-section'>
          <p className="fixed-element">I am fixed!</p>
          <div>
            <p>In this example, the fixed element fixed to the top of the page (top: 0).</p>
            <p>Scroll down to see the fixed element.</p>
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
    </div>
  )
}