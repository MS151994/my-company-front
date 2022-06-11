import '../popups.css'

interface Props {
    click: () => void;
}

export const TaskList = (props: Props) => {
    return (
        <div className="taskList__container">
            <div className="popups__header">
                <h1>task's</h1>
                <button onClick={props.click}>X</button>
            </div>
        </div>
    )

}