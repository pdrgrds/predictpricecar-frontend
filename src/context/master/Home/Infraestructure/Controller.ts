import { useState } from "react";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { ConfigData } from "../Domain/Utils";
import { useNavigate } from "react-router-dom";

export const Controller = (): IPropsScreen => {
    const [data, setData] = useState<ConfigData>({ listEvaluation: [], listBrandPremiun: [] });
    const navigate = useNavigate();

    const init = () => {
        setData(() => ({
            listEvaluation: [
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
                  kilometro: 15000,
                  link: "8",
                  precio: 55000,
                  tipo: "Manual",
                  titulo: "Ford Mustang",
                  uri: "https://live.dealer-asset.co/images/br1168/product/paintSwatch/vehicle/ford-negro.png?s=1024"
                },
                {
                  combustible: "Híbrido",
                  descripcion: "2.5 AWD Limited",
                  kilometro: 20000,
                  link: "9",
                  precio: 42000,
                  tipo: "Automático",
                  titulo: "Toyota RAV4 Hybrid",
                  uri: "https://grupopanaseminuevos.com.pe/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-09-at-9.25.16-AM-7.jpeg"
                }
            ],
            listBrandPremiun: [
                { link: '', titulo: 'Audi', uri: 'https://1000marcas.net/wp-content/uploads/2019/12/Audi-logo-600x338.png' },
                { link: '', titulo: 'BMW', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png' },
                { link: '', titulo: 'Ford', uri: 'https://1000marcas.net/wp-content/uploads/2020/01/Ford-Logo-2003.png' },
                { link: '', titulo: 'Mercedez Benz', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZCObLoRdbh0du795cmF1f8LXU2ud9HRgOA&s' },
                { link: '', titulo: 'Peugeot', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCyxUdIFF2ru_VI9PKeTSgfZj5mAW4bmGJg&s' },
                { link: '', titulo: 'Volkswagen', uri: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2019/04/logotipo-volkswagen-historia_21.jpg?tf=3840x' },
            ]
        }))
    }

    const redirectPage = (url: string) => {
        navigate(url)
    }

    return ({
        init,
        data,
        redirectPage
    })
}