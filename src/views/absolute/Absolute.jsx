import React from 'react';
import './styles.css';

import { PiceOfCode } from '../../components/pice-of-code';
import { DisplayWindow } from '../../components/display-window';

export const Absolute = () => {
  return (
    <div className='wrapper'>
      <h1 className='title'>Position Absolute</h1>
      <p>The element is removed from the normal document flow, and no space is created for the element in the page layout. Its final position is determined by the values of <span className='code-on-paragraph'>top</span>, <span className='code-on-paragraph'>right</span>, <span className='code-on-paragraph'>bottom</span>, and <span className='code-on-paragraph'>left</span>.</p>
      <p>An element with <span className='code-on-paragraph'>position: absolute;</span>  is positioned relative to the nearest positioned ancestor.</p>
      <p>In other words.</p>
      <p>
      An absolute position, is specified reletive to the parent of the element to which the style is applied. So if you set the <span className='code-on-paragraph'>left</span> property of an element to 25px under absolute positioning, the left side of
      the element appears 25 pixels to the right of the parent element's left edge.
    </p>
      <p>Setting the top, right, bottom, and left properties of a absolutly-positioned element will cause it to be adjusted away from its normal position.</p>
      <p className='example-text'>Example: </p>
      <p className='example-text'>HTML: </p>
      <PiceOfCode>
        <img src='./relative-html.png' />
      </PiceOfCode>
      <p className='example-text'>CSS: </p>
      <PiceOfCode>
        <p className='element-name'>.element <span className='opening-curly-bracket'>&#123;</span></p>
        <p>
          <span className='element-property'>position: <span className='element-value'>absolute;</span></span>
          <span className='closing-curly-bracket'>&#125;</span>
        </p>
      </PiceOfCode>
      <DisplayWindow headerTitle='CSS-Position'>
        <div className='parent-element'>
          <div className='child-element'></div>
        </div>
      </DisplayWindow>
      <p>On the example above, the element, a violet square div, it's positionaded 0 pixels top and 0 pixels left from its original position, since its nearest positioned ancestor is the document.</p>
      <p className='example-text'>Example Two: </p>
      <p className='example-text'>HTML: </p>
      <PiceOfCode>
        <img src='./absolute-parent.png' />
      </PiceOfCode>
      <p className='example-text'>CSS: </p>
      <PiceOfCode>
        <p className='element-name'>.element <span className='opening-curly-bracket'>&#123;</span></p>
        <p>
          <span className='element-property'>position: <span className='element-value'>absolute;</span></span>
          <span className='closing-curly-bracket'>&#125;</span>
        </p>
      </PiceOfCode>
      <DisplayWindow headerTitle='CSS-Position'>
        <div className='window-wrapper'>
        <div className='parent-with-child'></div>
        <div className='element-with-parent'></div>
        </div>
      </DisplayWindow>
      <p>On the example above, the element, a violet square div, it's positionaded 0 pixels top and 0 pixels left from its original position, since its nearest positioned ancestor is the document.</p>
    </div>
  )
}