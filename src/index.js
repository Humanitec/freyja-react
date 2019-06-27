import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { createTheme } from 'theme'
import { ThemeProvider } from "styled-components";

const themeColors = {
    primary: '#ddd009',
};

ReactDOM.render(<App />, document.getElementById('root'));

/*ReactDOM.render(
    <ThemeProvider theme={createTheme(themeColors)}  >
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);*/