import React from 'react';
import './styles.css';

import { PiceOfCode } from '../../components/pice-of-code';
import { DisplayWindow } from '../../components/display-window';

export const Relative = () => {
  return (
    <div className='wrapper'>
      <h1 className='title'>Position Relative</h1>
      <p>The <span className='code-on-paragraph'>position</span> CSS property sets how an element is positioned in a document. The <span className='code-on-paragraph'>top</span>, <span className='code-on-paragraph'>right</span>, <span className='code-on-paragraph'>bottom</span>, and <span className='code-on-paragraph'>left</span> properties determine the final location of positioned elements.</p>
      <p>An element with <span className='code-on-paragraph'>position: relative;</span>  is positioned relative to its normal position.</p>
      <p>You can think of relative position as being akin to laying out checkers on a checkerboard: The checker are arranged from left to right, and when you get to the adge of the board
        you move on to the next row.
      </p>
      <p>
        Elements that are display with the <span  className='code-on-paragraph'>block</span> value from the <span className='code-on-paragraph'>display</span> style property are autometically
        placed on a new row, whereas <span className='code-on-paragraph'>inline</span> elements are placed on the same row immdiately next to the element precedent them.
      </p>
      <p>Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.</p>
      <p className='example-text'>Example: </p>
      <p className='example-text'>HTML: </p>
      <img src='/relativehtmlexample.png' />
      <p className='example-text'>CSS: </p>
      <img src='/realtivecssexample.png' />
      <DisplayWindow headerTitle='CSS-Position'><div className='element-position'></div></DisplayWindow>
      <p>On this example, the element, a violet square div, it's positionaded 50 pixels top and 50 pixels left from its original position.</p>
    </div>
  )
}