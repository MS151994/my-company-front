import "./button.css";

interface Props {
    buttonName: string;
}

export const Button = (props: Props) => {
    return <button className={"my__button"}>{props.buttonName}</button>
}