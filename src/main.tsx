import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactGA from "react-ga4";

// Declaração de tipo para o objeto Analytics
declare global {
  interface Window {
    Analytics: {
      trackEvent: (category: string, action: string, label?: string, value?: number) => void;
      trackError: (description: string, fatal?: boolean) => void;
    };
  }
}

// Inicializa o Google Analytics
ReactGA.initialize("G-QQ5D70Q4RG");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

// Cria um objeto de analytics para exportar
const Analytics = {
  // Função para rastrear eventos personalizados
  trackEvent: (category: string, action: string, label?: string, value?: number) => {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  },

  // Função para rastrear erros
  trackError: (description: string, fatal = false) => {
    ReactGA.event({
      category: 'Error',
      action: description,
      label: fatal ? 'Fatal' : 'Non-fatal',
    });
  }
};

// Exporta o objeto Analytics para uso global
window.Analytics = Analytics;

// Exemplo de uso para rastrear uma visita à página inicial
Analytics.trackEvent('Navegação', 'Visita', 'Página Inicial');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
