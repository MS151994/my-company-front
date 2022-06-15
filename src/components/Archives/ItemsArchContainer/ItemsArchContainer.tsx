import {useEffect, useState} from "react";
import {Items} from "types";
import {config} from "../../../config/config";
import {Spinner} from "../../utils/Spinner/Spinner";
import {ItemArchive} from "./ItemArchive";

export const ItemsArchContainer = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Items[]>([]);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetch(`${config.api}/items/archives`);
                const data = await res.json();
                await setItems(data);
            } finally {
                setLoading(false);
            }
        })();

    }, [])

    return (
        <div>
            {loading && <Spinner/>}
            {items.map(el => <ItemArchive
                key={el.id}
                id={el.id}
                title={el.title}
                description={el.description}
                deadline={el.deadline}
                addedAt={el.addedAt}
                isActive={el.isActive}
            />)}
        </div>
    )
}