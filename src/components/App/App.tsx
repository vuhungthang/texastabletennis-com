import React from 'react';
import {appStyle} from './AppStyles';

export default function App() {
  return (
    <div className={appStyle}>
      <div className="result">
        <input type="text" value={1} />
      </div>
      <div className="flexbox-container">
        <div className="flexbox-items sign">(</div>
        <div className="flexbox-items sign">)</div>
        <div className="flexbox-items sign">%</div>
        <div className="flexbox-items sign">AC</div>
      </div>
      <div className="flexbox-container">
        <div className="flexbox-items">7</div>
        <div className="flexbox-items">8</div>
        <div className="flexbox-items">9</div>
        <div className="flexbox-items sign">/</div>
      </div>
      <div className="flexbox-container">
        <div className="flexbox-items">4</div>
        <div className="flexbox-items">5</div>
        <div className="flexbox-items">6</div>
        <div className="flexbox-items sign">X</div>
      </div>
      <div className="flexbox-container">
        <div className="flexbox-items">1</div>
        <div className="flexbox-items">2</div>
        <div className="flexbox-items">3</div>
        <div className="flexbox-items">-</div>
      </div>
      <div className="flexbox-container">
        <div className="flexbox-items">0</div>
        <div className="flexbox-items">.</div>
        <div className="flexbox-items sign" id="equal-sign">=</div>
        <div className="flexbox-items sign">+</div>
      </div>
    </div>
  );
}
