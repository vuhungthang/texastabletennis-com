import React, {useState} from 'react';
import {appStyle} from './AppStyles';

export default function App() {
  const [display, setDisplay] = useState('');

  const onClear = () => {
    setDisplay('');
  };
  const onSign = (sign: string) => {
    setDisplay(() => display + sign);
  };
  const onNum = (num: number) => {
    setDisplay(() => display + String(num));
  };
  const displayResult = () => {
    setDisplay(eval(display));
  };
  return (
    <div className={appStyle}>
      <div className="result">
        <div className="display">
          {display}
        </div>
      </div>
      <div className="flexbox-container">
        <button
          type="button"
          className="flexbox-items sign"
          onClick={() => onSign('(')}
        >
          (
        </button>
        <button
          type="button"
          className="flexbox-items sign"
          onClick={() => onSign(')')}
        >
          )
        </button>
        <button
          type="button"
          className="flexbox-items sign"
          onClick={() => onSign('%')}
        >
          %
        </button>
        <button
          type="button"
          className="flexbox-items sign"
          onClick={onClear}
        >
          AC
        </button>
      </div>
      <div className="flexbox-container">
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(7)}
        >
          7
        </button>
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(8)}
        >
          8
        </button>
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(9)}
        >
          9
        </button>
        <button
          type="button"
          className="flexbox-items sign"
          onClick={() => onSign('/')}
        >
          /
        </button>
      </div>
      <div className="flexbox-container">
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(4)}
        >
          4
        </button>
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(5)}
        >
          5
        </button>
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(6)}
        >
          6
        </button>
        <button
          type="button"
          className="flexbox-items sign"
          onClick={() => onSign('*')}
        >
          *
        </button>
      </div>
      <div className="flexbox-container">
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(1)}
        >
          1
        </button>
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(2)}
        >
          2
        </button>
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(3)}
        >
          3
        </button>
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onSign('-')}
        >
          -
        </button>
      </div>
      <div className="flexbox-container">
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onNum(0)}
        >
          0
        </button>
        <button
          type="button"
          className="flexbox-items"
          onClick={() => onSign('.')}
        >
          .
        </button>
        <button
          type="button"
          className="flexbox-items sign"
          id="equal-sign"
          onClick={() => displayResult()}
        >
          =
        </button>
        <button
          type="button"
          className="flexbox-items sign"
          onClick={() => onSign('+')}
        >
          +
        </button>
      </div>
    </div>
  );
}
