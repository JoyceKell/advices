import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import Toggle from './components/ThemeToggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
         <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
        <App />
          </Background>
    </ThemeProvider>,
  </React.StrictMode>
);
