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
      <p>Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.</p>
      <p className='example-text'>Example: </p>
      <p className='example-text'>HTML: </p>
      <PiceOfCode>
        <img src='./relative-html.png' />
      </PiceOfCode>
      <p className='example-text'>CSS: </p>
      <PiceOfCode>
        <p className='element-name'>body <span className='opening-curly-bracket'>&#123;</span></p>
        <p>
          <span className='element-property'>margin: <span className='element-value'>0;</span></span>
          <span className='element-property'>padding: <span className='element-value'>0;</span></span>
          <span className='closing-curly-bracket'>&#125;</span>
        </p>
        <p className='element-name'>.element <span className='opening-curly-bracket'>&#123;</span></p>
        <p>
          <span className='element-property'>position: <span className='element-value'>relative;</span></span>
          <span className='element-property'>top: <span className='element-value'>50px;</span></span>
          <span className='element-property'>left: <span className='element-value'>50px;</span></span>
          <span className='element-property'>border-radius: <span className='element-value'>5px;</span></span>
          <span className='element-property'>width: <span className='element-value'>100px;</span></span>
          <span className='element-property'>height: <span className='element-value'>100px;</span></span>
          <span className='element-property'>border: <span className='element-value'>1px solid violet;</span></span>
          <span className='closing-curly-bracket'>&#125;</span>
        </p>
      </PiceOfCode>
      <DisplayWindow headerTitle='CSS-Position'><div className='element-position'></div></DisplayWindow>
      <p>On this example, the element, a violet square div, it's positionaded 50 pixels top and 50 pixels left from its original position.</p>
    </div>
  )
}