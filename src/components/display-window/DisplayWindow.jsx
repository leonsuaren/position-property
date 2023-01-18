import React from 'react';
import './styles.css';

export const DisplayWindow = ({ headerTitle, children }) => {
  return (
    <div className='window-container'>
      <div className='window-header'>
        <p className='window-header-title'>{ headerTitle }</p>
      </div>
      { children }
    </div>
  )
}