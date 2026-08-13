import { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

import Home from './pages/Home';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const InternalPage = lazy(() => import('./pages/InternalPage'));
const DentistPage = lazy(() => import('./pages/DentistPage'));
const PoliticaPrivacidadePage = lazy(() => import('./pages/PoliticaPrivacidadePage'));
const TermosDeUsoPage = lazy(() => import('./pages/TermosDeUsoPage'));

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
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidadePage />} />
            <Route path="/termos-de-uso" element={<TermosDeUsoPage />} />
            <Route path="/:slug" element={<InternalPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
