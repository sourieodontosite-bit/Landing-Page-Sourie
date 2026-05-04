import { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

import Home from './pages/Home';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const InternalPage = lazy(() => import('./pages/InternalPage'));

const DentistPage = lazy(() => import('./pages/DentistPage'));

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/equipe/:slug" element={<DentistPage />} />
            <Route path="/p/:slug" element={<InternalPage />} />
            <Route path="/:slug" element={<InternalPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
