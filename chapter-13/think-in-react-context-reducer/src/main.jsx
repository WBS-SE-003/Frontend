import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { TodoState } from './context/TodoState.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TodoState>
            <App />
        </TodoState>
    </StrictMode>
);
