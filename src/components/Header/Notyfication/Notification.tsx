import '../popups.css'

interface Props {
    click: () => void;
}

export const Notification = (props: Props) => {
    return (
        <div className="notify__container">
            <div className="popups__header">
                <h1>notify</h1>
                <button onClick={props.click}>X</button>
            </div>
        </div>
    )
}