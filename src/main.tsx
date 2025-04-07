import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifMaticoApp } from './GifMaticoApp';

import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifMaticoApp />
  </StrictMode>,
)
