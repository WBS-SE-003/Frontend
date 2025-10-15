import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { MainLayout } from './layouts/MainLayout';
import { Detail } from './components/Detail';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:id' element={<Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
