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
    try {
      // eslint-disable-next-line no-eval
      setDisplay(eval(display));
    } catch (error) {
      setDisplay('Syntax Error');
    }
  };

  return (
    <div className={appStyle}>
      <div className="result">
        <div className="display">
          {display}
        </div>
      </div>
      <div className="flexbox-container">
        {['(', ')', '%'].map((value) => (
          <button
            key={value}
            type="button"
            className="flexbox-items sign"
            onClick={() => onSign(value)}
          >
            {value}
          </button>
        ))}
        <button
          type="button"
          className="flexbox-items sign"
          onClick={onClear}
        >
          AC
        </button>
      </div>
      <div className="flexbox-container">
        {['7', '8', '9'].map((value) => (
          <button
            key={value}
            type="button"
            className="flexbox-items"
            onClick={() => onNum(Number(value))}
          >
            {value}
          </button>
        ))}
        <button
          type="button"
          className="flexbox-items sign"
          onClick={() => onSign('/')}
        >
          /
        </button>
      </div>
      <div className="flexbox-container">
        {['4', '5', '6'].map((value) => (
          <button
            key={value}
            type="button"
            className="flexbox-items"
            onClick={() => onNum(Number(value))}
          >
            {value}
          </button>
        ))}
        <button
          type="button"
          className="flexbox-items sign"
          onClick={() => onSign('*')}
        >
          *
        </button>
      </div>
      <div className="flexbox-container">
        {['1', '2', '3'].map((value) => (
          <button
            key={value}
            type="button"
            className="flexbox-items"
            onClick={() => onNum(Number(value))}
          >
            {value}
          </button>
        ))}
        <button
          type="button"
          className="flexbox-items sign"
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
