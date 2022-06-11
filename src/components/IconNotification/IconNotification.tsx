import {Notification} from "../Header/Notyfication/Notification";
import {Calendar} from "../Header/Calendar/Calendar";
import {TaskList} from "../Header/TaskList/TaskList";
import {useState} from "react";

import './iconNotification.css';


export const IconNotification = () => {
    const [openNotyfications, setOpenNotyfications] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openTasks, setOpenTask] = useState(false);


    return (
        <>
            <div className={"icon__container"}>
                <button className={"icon__btn"} onClick={() => setOpenNotyfications(!openNotyfications)}>🔔</button>
                <button className={"icon__btn"} onClick={() => setOpenCalendar(!openCalendar)}>📅</button>
                <button className={"icon__btn"} onClick={() => setOpenTask(!openTasks)}>📋</button>
            </div>
            {openNotyfications && <Notification click={() => setOpenNotyfications(!openNotyfications)}/>}
            {openCalendar && <Calendar click={() => setOpenCalendar(!openCalendar)}/>}
            {openTasks && <TaskList click={() => setOpenTask(!openTasks)}/>}
        </>
    )
}