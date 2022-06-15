import {Item} from "../../Item/Item";
import {useEffect, useState} from "react";
import {Spinner} from "../../utils/Spinner/Spinner";
import {config} from "../../../config/config";
import {Items} from "types";

import './itemsContainer.css';
import {AddNew} from "../../Item/AddNew";

export const ItemContainer = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Items[]>([]);

    useEffect(() => {

        (async () => {
                try {
                    setLoading(true);
                    const res = await fetch(`${config.api}/items`)
                    const data = await res.json();
                    await setItems(data);
                } finally {
                    setLoading(false);
                }
            }
        )();
    }, [])

    return (
        <div className="items__container">
            <div className="spinner__box">
                {loading && <Spinner/>}
            </div>
            <AddNew/>
            {items.map(el =>
                <Item
                    id={el.id}
                    key={el.id}
                    title={el.title}
                    description={el.description}
                    deadline={el.deadline}
                />)}
        </div>
    )
}