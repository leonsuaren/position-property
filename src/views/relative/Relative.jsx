import React from 'react';
import './styles.css';

import { DisplayWindow } from '../../components/display-window';

export const Relative = () => {
  return (
    <div className='wrapper'>
      <h1 className='title'>Position Relative</h1>
      <p>The <span className='code-on-paragraph'>position</span> CSS property sets how an element is positioned in a document. The <span className='code-on-paragraph'>top</span>, <span className='code-on-paragraph'>right</span>, <span className='code-on-paragraph'>bottom</span>, and <span className='code-on-paragraph'>left</span> properties determine the final location of positioned elements.</p>
      <p>An element with <span className='code-on-paragraph'>position: relative;</span>  is positioned relative to its normal position.</p>
      <p>You can think of relative position as being akin to laying out checkers on a checkerboard: The checker is arranged from left to right, and when you get to the edge of the board
      you move on to the next row.
      </p>
      <p>
        Elements that are displayed with the <span className='code-on-paragraph'>block</span> value from the <span className='code-on-paragraph'>display</span> style property are automatically
        placed on a new row, whereas <span className='code-on-paragraph'>inline</span> elements are placed on the same row immediately next to the element precedent them.
      </p>
      <p>Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.</p>
      <p className='example-text'>Example: </p>
      <p className='example-text'>HTML: </p>
      <img src='/relativehtmlexample.png' alt='...'/>
      <p className='example-text'>CSS: </p>
      <img src='/realtivecssexample.png' alt='...'/>
      <DisplayWindow headerTitle='CSS-Position'><div className='element-position'></div></DisplayWindow>
      <p>In this example, the element, a violet square div, it's positioned 50 pixels top and 50 pixels left from its original position.</p>
      <p>Relative Position moves the element in relation to its original position but it does not affect any other element just leaves an empty space.</p>
      <p className='example-text'>Example: </p>
      <p className='example-text'>HTML: </p>
      <img src='/relativeexamplenospace.png' alt='...'/>
      <p className='example-text'>CSS: </p>
      <img src='/relativeexamplenostace.png' alt='...'/>
      <DisplayWindow headerTitle='CSS-Position'>
        <div className="parent">
          <div className="child">div 1</div>
          <div className="child child-two">div 2</div>
          <div className="child">div 3</div>
        </div>
      </DisplayWindow>
    </div>
  )
}