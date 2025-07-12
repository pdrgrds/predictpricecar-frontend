import { useNavigate } from "react-router-dom";
import { EntityCardCarComponent } from "../../../Domain/EntityCardCarComponent";
import { CardCarComponent } from "../../CardCar";
import './style.scss';

interface IProps {
    list: Array<EntityCardCarComponent>;
    className?: string
}

export const ListEvaluationSection = (props: IProps) => {
    const navigate = useNavigate();

    return (
        <section className={`ListEvaluationSection ${props.className}`}>
            <div className='container-evaluations-section'>
                <div className='container-title-evaluations'>
                    <h2>Evaluaciones recientes</h2>
                    <span onClick={() => navigate('/prediction/list')} className='view-all-evaluations'>ver todo <i className='fa-solid fa-up-right-from-square' /></span>
                </div>
                <div className='list-evaluation'>
                    <CardCarComponent />
                </div>

            </div>
        </section>
    )
}