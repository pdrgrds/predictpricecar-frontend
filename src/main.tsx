import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './router'
import { LoaderComponent } from './context/shared/Components/Loader';
import { Provider as ProviderRedux } from 'react-redux';
import { AdapterStore } from './context/shared/Infraestructure/AdapterStore';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderRedux store={AdapterStore}>
      <LoaderComponent />
      <App />
    </ProviderRedux>
  </StrictMode>,
)
