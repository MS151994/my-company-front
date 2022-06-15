import {Items} from "types"
import './itemsArchive.css'

export const ItemArchive = (props: Items) => {
    const dt = new Date(props.deadline.toString())
    return (
        <li className="itemsArch__container">
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{dt.toLocaleDateString()}</p>
            <p>{props.addedAt}</p>
            <p>Done at:</p>
            <p>by: user</p>
        </li>
    )
}