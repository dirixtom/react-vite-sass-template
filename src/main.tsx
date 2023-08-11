import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layouts/App.tsx'
import './assets/sass/index.sass'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found with id "root"');

ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)