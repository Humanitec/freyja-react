import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { theme } from 'theme'
import { ThemeProvider } from "styled-components";


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);