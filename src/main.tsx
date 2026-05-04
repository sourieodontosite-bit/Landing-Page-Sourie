import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Register GSAP plugins lazily to avoid blocking initial render
import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
  import('gsap').then(({ default: gsap }) => {
    gsap.registerPlugin(ScrollTrigger);
  });
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
