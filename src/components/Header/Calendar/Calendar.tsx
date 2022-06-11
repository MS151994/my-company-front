import '../popups.css'

interface Props {
    click: () => void;
}

export const Calendar = (props: Props) => {
    return (
        <div className="calendar__container">
            <div className="popups__header">
                <h1>calendar</h1>
                <button onClick={props.click}>X</button>
            </div>
        </div>
    )
}