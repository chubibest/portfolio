import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle(({
  'body': {
    // 'background-color': '#0a192f'
    'background-color': 'black'
  }
}))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
  // {/* </ThemeProvider> */}

);
  // "homepage": "https://chubibest.github.io/portfolio",
  // https://victoronwuzor.io/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
