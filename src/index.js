import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { themeTest } from 'theme'
import { ThemeProvider } from "styled-components";

eactDOM.render(
    <ThemeProvider theme={themeTest}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);