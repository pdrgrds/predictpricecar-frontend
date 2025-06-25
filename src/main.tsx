import { createRoot } from 'react-dom/client'
import './index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './router'
import { LoaderComponent } from './context/shared/Components/Loader';
import { Provider as ProviderRedux } from 'react-redux';
import { AdapterStore } from './context/shared/Infraestructure/AdapterStore';
//@ts-expect-error @ts-ignore
import 'swiper/css';
//@ts-expect-error @ts-ignore
import 'swiper/css/navigation';
//@ts-expect-error @ts-ignore
import 'swiper/css/pagination';
//@ts-expect-error @ts-ignore
import 'swiper/css/scrollbar';

createRoot(document.getElementById('root')!).render(
  <ProviderRedux store={AdapterStore}>
    <LoaderComponent />
    <App />
  </ProviderRedux>
)
