import './styles.scss'

interface IProps {
    options: {
        label: string;
        key: string;
    }[];
    onChange(key: string): void;
}

export const StepperComponent = (props: IProps) => {

    return (
        <div className="Steppercomponent">
            {
                props.options.map((row, index) =>
                    <div className="item-stepper" key={row.key}>
                        <span className='item-icon'>{index + 1}</span>
                        <span className='item-text'> { row.label } </span>
                    </div>
                )
            }
        </div>
    )
}