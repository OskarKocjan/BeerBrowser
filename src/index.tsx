import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './theme/global';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from './theme/theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyles />
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
