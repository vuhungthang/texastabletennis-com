import {css} from '@emotion/css';

export const appStyle = css` 
          .flexbox-container {
            display: flex;
            flex-direction: row;
            align-content: center;
            align-items: center;
            justify-content: center;

          }
          .flexbox-items {
            flex-grow: 2;
            flex-basis: 100%;
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            padding: 10px;
            border: 2px solid grey;
            background-color: #F1F4F5;
          }
          .sign {
            background-color: #DADCE1;
          }
          .flexbox-items:hover {
            background-color: #A9A9A9;
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .result {
            font-weight: bold;
            text-align: right;
            font-size: 1em;
            border-radius: 4px;
            border: 20px;
          }
          .result input {
            width: 100%;
            text-align: right;
            box-sizing: border-box;
            padding: 6px;
            border-radius: 4px;
            border-left: none;
            border-top: none;
          }

          #equal-sign {
            color: white;
            background-color: #4285F4;
          }
`;
