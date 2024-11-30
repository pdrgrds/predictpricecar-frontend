import { useSelector } from 'react-redux';
import './style.scss';
import { RootState } from '../../Infraestructure/AdapterStore';

export const LoaderComponent = () => {
    const { loading } = useSelector((state: RootState) => state.generic);
    console.log(loading)
    return (
        loading ?
        <div className='LoaderComponent'>
            <p>Cargando...</p>
        </div>
        : null
    )
}