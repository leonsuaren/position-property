import React from 'react';
import './styles.css';

import { DisplayWindow } from '../../components/display-window'

export const PracticalCases = () => {
  return (
    <div className='wrapper'>

      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
        <label class="btn btn-outline-primary" for="btnradio1">Fixed</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
        <label class="btn btn-outline-primary" for="btnradio2">Relative</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
        <label class="btn btn-outline-primary" for="btnradio3">Sticky</label>
      </div>
      <DisplayWindow headerTitle='FaceNote'>
        <div className='fecenote-content'>
          <div className='inner-container'>
            <div className='menu'>
              <div className='menu-element-one blur'>Home</div>
              <div className='menu-element-two blur'>Products</div>
              <div className='menu-element-three blur'>Services</div>
              <div className='menu-element-four blur'>Contact</div>
            </div>
            <div className='avatar'>
            </div>
            <div className='marketing'></div>
            <div className='section-one'></div>
            <div className='section-two'></div>
            <div className='section-three'></div>
            <div className='section-four'></div>
            <div className='section-five'></div>
            <div className='section-six'></div>
            <div className='section-seven'></div>
            <div className='section-eigth'></div>
            <div className='section-nine'></div>
            <div className='section-ten'></div>
            <div className='section-eleven'></div>
            <div className='section-twelve'></div>
          </div>
        </div>
      </DisplayWindow>
    </div>
  )
}