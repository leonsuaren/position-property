import React from 'react';
import './styles.css';

export const Positioning = () => {
  return (
    <div className='wrapper'>
      <h1 className='title'>Positioning</h1>
      <p>The <span className='code-on-paragraph'>position</span>  property can help you manipulate the location of an element, by specifying the type of positioning method.</p>
      <p>The <span className='code-on-paragraph'>position</span> property specifies the type of positioning method used for an element.</p>
      <p>There are five different position values:</p>
      <ul>
        <li>static</li>
        <li>relative</li>
        <li>fixed</li>
        <li>absolute</li>
        <li>sticky</li>
      </ul>
      <p className='example-text'>Example: </p>
      <img alt='...' src='/simplepositionexample.png'/>
      <p>
        With the freedom of placing elements anywhere you want on a page, you can run into the problem of <i>overlap</i>, when an element takes up space another element is using. Nothing is 
        stopping you from specifying the absolute lecation af elements so that they <i>overlap</i>. In this case, <b>CSS</b> relies on the <span className='code-on-paragraph'>z-index</span> of each element to determinate which element is on the top
        and which is on the bottom.
      </p>
    </div>
  )
}