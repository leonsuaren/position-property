import React from 'react';
import './styles.css';

import { DisplayWindow } from '../../components/display-window';

export const Absolute = () => {
  return (
    <div className='wrapper'>
      <h1 className='title'>Position Absolute</h1>
      <p>The element is removed from the normal document flow, and no space is created for the element in the page layout. Its final position is determined by the values of <span className='code-on-paragraph'>top</span>, <span className='code-on-paragraph'>right</span>, <span className='code-on-paragraph'>bottom</span>, and <span className='code-on-paragraph'>left</span>.</p>
      <p>An element with <span className='code-on-paragraph'>position: absolute;</span>  is positioned relative to the nearest positioned ancestor.</p>
      <p>In other words.</p>
      <p>
        An absolute position is specified relative to the parent of the element to which the style is applied. So if you set the <span className='code-on-paragraph'>left</span> property of an element to 25px under absolute positioning, the left side of
      the element appears 25 pixels to the right of the parent element's left edge.
    </p>
      <p>Setting the top, right, bottom, and left properties of an absolutely-positioned element will cause it to be adjusted away from its normal position.</p>
      <p className='example-text'>Example: </p>
      <p className='example-text'>HTML: </p>
      <img alt='...' src='/relativehtmlexample.png' />
      <p className='example-text'>CSS: </p>
      <img alt='...' src='/absolutehtmlexample.png' />
      <DisplayWindow headerTitle='CSS-Position'>
        <div className='parent-element'>
          <div className='child-element' />
        </div>
      </DisplayWindow>
      <p>In the example above, the element, a violet square div, it's positioned 0 pixels top and 0 pixels left from its original position, since its nearest positioned ancestor is the document.</p>
      <p className='example-text'>Example Two: </p>
      <p className='example-text'>HTML: </p>
        <img alt='...' src='/absolutehtmlsecondexample.png' />
      <p className='example-text'>CSS: </p>
        <img alt='...' src='/absolutecsssecondexample.png' />
      <DisplayWindow headerTitle='CSS-Position'>
        <div className='window-wrapper'>
          <div className='parent-with-child'> Parent
          <div className='element-with-parent'>Child</div>
          </div>
        </div>
      </DisplayWindow>
      <p>In this example, the element child is positioned 50px bottom and 50px left relative to its parent. </p>
      <p>An element with a position absolute does not have a default width of 100% like a block element normally would, it is only as wide as its content, also the browsers does not position
        the element relative to its original location as it did with relative positioning, the position set absolutly inside the first containing element that does not have a position of static.
      </p>
      <p className='example-text'>Example: </p>
      <p className='example-text'>HTML: </p>
      <img alt='...' src='/relativeexamplenospace.png' />
      <p className='example-text'>CSS: </p>
      <img alt='...' src='/cssexampleabsolutenospace.png' />
      <DisplayWindow headerTitle='CSS-Position'>
        <div className="parent">
          <div className="child">div 1</div>
          <div className="child">div 3</div>
          <div className="child-two-absolute">div 2, position absolute</div>
        </div>
      </DisplayWindow>
    </div>
  )
}