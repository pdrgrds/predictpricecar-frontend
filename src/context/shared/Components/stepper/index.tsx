import './styles.scss'

interface IProps {
    options: {
        label: string;
        key: string;
    }[];
    currentKey: string;
    onChange(key: string): void;
}

export const StepperComponent = (props: IProps) => {
    const currentPositionStep = props.options.findIndex(row => row.key === props.currentKey);

    return (
        <div className="Steppercomponent">
            {
                props.options.map((row, index) =>
                    <div
                        onClick={() => props.onChange(row.key)}
                        className={`item-stepper ${currentPositionStep < index ? 'item-pending' : (currentPositionStep === index ? 'item-current' : 'item-complete')}`}
                        key={row.key}
                    >
                        {
                            
                                <span className='item-icon'>
                                    {
                                        currentPositionStep <= index ?
                                            <>{index + 1}</>
                                            :
                                            <i className='fa-solid fa-check' style={{ fontSize: 20, fontWeight: 'bold', color: 'white', margin: 0 }} />
                                    }
                                </span>
                        }
                        <span className='item-text'> { row.label } </span>
                    </div>
                )
            }
        </div>
    )
}