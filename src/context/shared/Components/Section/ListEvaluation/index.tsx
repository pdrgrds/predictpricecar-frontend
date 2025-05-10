import { useNavigate } from "react-router-dom";
import { EntityCardCarComponent } from "../../../Domain/EntityCardCarComponent";
import { CardCarComponent } from "../../CardCar";
import './style.scss';

interface IProps {
    list: Array<EntityCardCarComponent>;
}

export const ListEvaluationSection = (props: IProps) => {

    const navigate = useNavigate();
    const _list = props.list.length > 0 ? props.list : [
        {
            combustible: "Gasolina",
            descripcion: "2.0 TFSI quattro S tronic",
            kilometro: 30,
            link: "2",
            precio: 45000,
            tipo: "Automático",
            titulo: "Audi A4",
            uri: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg"
        },
        {
            combustible: "Diesel",
            descripcion: "1.6 BlueHDi Feel",
            kilometro: 40,
            link: "3",
            precio: 28000,
            tipo: "Manual",
            titulo: "Peugeot 308",
            uri: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
        },
        {
            combustible: "Híbrido",
            descripcion: "3.5 Hybrid LE sedan",
            kilometro: 15,
            link: "4",
            precio: 32000,
            tipo: "Automático",
            titulo: "Toyota Prius",
            uri: "https://www.privatecollectionmotors.com/imagetag/496/main/l/Used-2017-Mercedes-Benz-AMG-GT-S-AMG-GT-S-1689746732.jpg"
        },
        {
            combustible: "Eléctrico",
            descripcion: "Long Range Plus AWD",
            kilometro: 50,
            link: "5",
            precio: 65000,
            tipo: "Automático",
            titulo: "Tesla Model S",
            uri: "https://www.marinoperformancemotors.com/imagetag/13117/11/l/Used-2017-Mercedes-Benz-AMG-GT-S.jpg"
        },
        {
            combustible: "Gasolina",
            descripcion: "1.8 i-VTEC EX sedan",
            kilometro: 25,
            link: "6",
            precio: 23000,
            tipo: "Manual",
            titulo: "Honda Civic",
            uri: "https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_640.png"
        },
        {
            combustible: "Diesel",
            descripcion: "2.2 i-DTEC SE 4WD",
            kilometro: 10,
            link: "7",
            precio: 37000,
            tipo: "Automático",
            titulo: "Honda CR-V",
            uri: "https://thumbs.dreamstime.com/b/vintage-american-car-garage-selective-focus-vintage-american-car-garage-selective-focus-322997417.jpg"
        },
        {
          combustible: "Gasolina",
          descripcion: "5.0 V8 GT Fastback",
          kilometro: 15,
          link: "8",
          precio: 55000,
          tipo: "Manual",
          titulo: "Ford Mustang",
          uri: "https://live.dealer-asset.co/images/br1168/product/paintSwatch/vehicle/ford-negro.png?s=1024"
        },
        {
          combustible: "Híbrido",
          descripcion: "2.5 AWD Limited",
          kilometro: 20,
          link: "9",
          precio: 42000,
          tipo: "Automático",
          titulo: "Toyota RAV4 Hybrid",
          uri: "https://grupopanaseminuevos.com.pe/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-09-at-9.25.16-AM-7.jpeg"
        }
    ];

    return (
        <section className='ListEvaluationSection'>
            <div className='container-evaluations-section'>
                <div className='container-title-evaluations'>
                    <h2>Evaluaciones recientes</h2>
                    <span onClick={() => navigate('/prediction/list')} className='view-all-evaluations'>ver todo <i className='fa-solid fa-up-right-from-square' /></span>
                </div>
                <div className='list-evaluation'>
                    {
                        _list.map((row, index) =>
                            <CardCarComponent {...row} key={index} />
                        )
                    }
                </div>

            </div>
        </section>
    )
}