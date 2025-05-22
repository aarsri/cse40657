//import react library components
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import custom library components
import Index from './components/pages';

//import design files
import '@design/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
