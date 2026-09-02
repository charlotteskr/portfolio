import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Rekkefølgen speiler den gamle <link>-rekkefølgen i .html-filene:
// project.css først, så styles.css med tokens, så sidespesifikk CSS, så nav.
import './styles/project.css';
import './styles/styles.css';
import './styles/mjospromenaden.css';
import './styles/smart.css';
import './styles/storebrand.css';
import './styles/ks-kunnskap.css';
import './styles/nav.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
