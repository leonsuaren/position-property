import React, { useState, useEffect } from 'react';
import './styles.css';

import { DisplayWindow } from '../../components/display-window'

export const PracticalCases = () => {
  const [fixedMenu, setFixedMenu] = useState(true);
  const [relativeButton, setRelativeButton] = useState(true);
  const [stickyTricks, setStickyTricks] = useState(true);

  const handleOnFixedElement = () => {
    setFixedMenu(s => !s);
    setRelativeButton(true);
    setStickyTricks(true);
  }

  const handleOnShowRelativeElement = () => {
    setRelativeButton(s => !s);
    setFixedMenu(true);
    setStickyTricks(true);

  }

  const handleOnCreateStickyEffect = () => {
    setStickyTricks(s => !s);
    setFixedMenu(true);
    setRelativeButton(true);
  }

  useEffect(() => {
    setFixedMenu(true);
    setRelativeButton(true);
    setStickyTricks(true);
  }, []);

  return (
    <div className='wrapper'>

      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={handleOnFixedElement} />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">Fixed</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={handleOnShowRelativeElement}>Relative</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio3" onClick={handleOnCreateStickyEffect}>Sticky</label>
      </div>
      <DisplayWindow headerTitle='FaceNote'>
        <div className='fecenote-content'>
          <div className='inner-container'>
            {
              fixedMenu ?
                <div className='menu'>
                  <div className='menu-element-one blur'>Home</div>
                  <div className='menu-element-two blur'>Products</div>
                  <div className='menu-element-three blur'>Services</div>
                  <div className='menu-element-four blur'>Contact</div>
                </div> :
                <div className='menu-fixed'>
                  <div className='menu-element-one-fixed'>Home</div>
                  <div className='menu-element-two-fixed'>Products</div>
                  <div className='menu-element-three-fixed'>Services</div>
                  <div className='menu-element-four-fixed'>Contact</div>
                </div>
            }
            {
              relativeButton ?
                <div className='avatar'>
                  <div className='avatar-picture'>
                    <div className='avatar-picture-inner-circle' />
                  </div>
                  <div className='avatar-info'>
                    <p className='avatar-info-paragraph blur'>Leon Suarez</p>
                    <p className='avatar-info-paragraph blur'>Full Stack Web Developer</p>
                  </div>
                </div> :

                <div className='avatar'>
                  <div className='avatar-picture-relative'>
                    <img alt='Leon Suarez' src='/leonsuarezavataredited_ccexpress.png' />
                  </div>
                  <div className='avatar-info'>
                    <p className='avatar-info-paragraph '>Leon Suarez</p>
                    <p className='avatar-info-paragraph '>Full Stack Web Developer</p>
                  </div>
                </div>
            }

            <div className='marketing'></div>
            {
              fixedMenu ?
                <div className='description-paragraph'>
                  <p className='description-paragraph-text'>Officia do laboris commodo culpa sunt eiusmod. Ullamco ullamco aliquip commodo do enim ex dolore. Ut velit ad veniam qui adipisicing laborum enim amet. Excepteur ipsum irure cupidatat et excepteur officia dolore eu Lorem eiusmod amet Lorem ipsum culpa.
                  </p>
                </div> :
                <div className='description-paragraph-fixed'>
                  <p className='description-paragraph-text-fixed'>We can apply a position fixed on a navigation bar, so we can navigate and get access to all the content easier. Scroll down to see the effect.</p>
                </div>
            }
            {
              relativeButton ?
                <div className='section-two-avatar'>
                  <p className='description-paragraph-text'>Officia do laboris commodo culpa sunt eiusmod. Ullamco ullamco aliquip commodo do enim ex dolore. Ut velit ad veniam qui adipisicing laborum enim amet. Excepteur ipsum irure cupidatat et excepteur officia dolore eu Lorem eiusmod amet Lorem ipsum culpa.</p>
                </div> :
                <div className='section-two-avatar-relative'>
                  <p className='description-paragraph-text-fixed'>The edit button appears relative to its position on an Avatar element.</p>
                </div>
            }

            <div className='section-three'>
              <div className='section-three-fake-image' />
              <p className='description-paragraph-text blur'>Officia do laboris commodo culpa sunt eiusmod. Ullamco ullamco aliquip commodo do enim ex dolore. Ut velit ad veniam qui adipisicing laborum enim amet. Excepteur ipsum irure cupidatat et excepteur.</p>
            </div>
            {
              stickyTricks ?
                <div className='section-four'>
                  <p className='description-paragraph-text blur'>Officia do laboris commodo culpa sunt eiusmod. Ullamco ullamco aliquip commodo do enim ex dolore. Ut velit ad veniam qui adipisicing laborum enim amet. Excepteur ipsum irure cupidatat et excepteur.  Excepteur ipsum irure cupidatat et excepteur officia dolore eu Lorem eiusmod amet Lorem ipsum culpa.  Excepteur ipsum irure cupidatat et excepteur officia dolore eu Lorem eiusmod amet Lorem ipsum culpa.</p>
                </div> :
                <div className='section-four-sticky-effect'>
                  <p className='description-paragraph-text-fixed'>With the Sticky Property, you can make any element get stuck wherever you want and create some cool effects. Scroll down to see it in action.</p>
                </div>
            }
            <div className='section-five'>
              <div className='square-image' />
              <div><p className='description-paragraph-text blur'>Officia do laboris commodo culpa sunt eiusmod. Ullamco ullamco aliquip commodo do enim ex dolore.</p></div>
              <div><p className='description-paragraph-text blur'>Officia do laboris commodo culpa sunt eiusmod. Ullamco ullamco aliquip commodo do enim ex dolore.</p></div>
              <div className='square-image' />
              <div className='square-image' />
              <div><p className='description-paragraph-text blur'>Officia do laboris commodo culpa sunt eiusmod. Ullamco ullamco aliquip commodo do enim ex dolore.</p></div>
              <div><p className='description-paragraph-text blur'>Officia do laboris commodo culpa sunt eiusmod. Ullamco ullamco aliquip commodo do enim ex dolore.</p></div>
              <div className='square-image' />
            </div>
            {
              stickyTricks ?
                <div className='section-six-sticky'>
                  <div className='square-image' />
                </div> :
                <div className='sticky-banner-wrapper'>
                  <div className='sticky-square-banner'>
                    <p className='description-paragraph-text-fixed'>BANNER</p>
                  </div>
                </div>
            }

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