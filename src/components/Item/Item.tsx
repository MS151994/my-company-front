import {Items} from 'types';
import './item.css'


export const Item = (props: Items) => {
    const dt = new Date(props.deadline.toString());
    return (
        <div className="item__box">
            <div className="item__title">
                {props.title}
            </div>
            <div className="item__info">
                <p className="item__description">
                    {props.description}
                </p>
                <p className="item__deadline">
                    deadline: {dt.toLocaleDateString()}
                </p>
                <p>
                    assigned person
                </p>
            </div>

            <div className="item__buttons_box">
                <button>test</button>
                <button>test</button>
            </div>
        </div>
    )
}