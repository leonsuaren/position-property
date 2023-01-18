import React from 'react';
import './styles.css';

import { PiceOfCode } from '../../components/pice-of-code';
import { DisplayWindow } from '../../components/display-window';

export const Positioning = () => {
  return (
    <div>
      <h1>Positioning</h1>
      <p>The position property can help you manipulate the location of an element, by specifying the type of positioning method.</p>
      <p>The <span className='code-on-paragraph'>position</span> property specifies the type of positioning method used for an element.</p>
      <p>There are five different position values:</p>
      <ul>
        <li>static</li>
        <li>relative</li>
        <li>fixed</li>
        <li>absolute</li>
        <li>sticky</li>
      </ul>
      <p>Example: </p>
      <PiceOfCode>
        <p className='element-name'>.element </p>
        <p><span className='opening-curly-bracket'>&#123;</span><br />
          <span className='element-property'>position: <span className='element-value'>relative;</span></span>
          <span className='element-property'>top: <span className='element-value'>50px;</span></span>
          <span className='element-property'>left: <span className='element-value'>50px;</span></span>
          <span className='closing-curly-bracket'>&#125;</span>
        </p>
      </PiceOfCode>
      <DisplayWindow headerTitle='CSS-Position'><div className='element-position'></div></DisplayWindow>
      <p>On this example, the element, a violet square div, it's positionaded 10 pixels top and 10 pixels left from its parent.</p>
    </div>
  )
}