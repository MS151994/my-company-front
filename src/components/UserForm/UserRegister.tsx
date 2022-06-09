import {SyntheticEvent, useState} from "react";
import {Button} from "../utils/Button/Button";
import {Spinner} from "../utils/Spinner/Spinner";
import {NavButton} from "../utils/NavButton/NavButton";
import {config} from "../../config/config";

export const UserRegister = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        password: '',
        confirm_password: '',
    })

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    }

    const handleRegister = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${config.api}/registration`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            const data = await res.json();
            console.log(data);
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className={"userForm__container"} onSubmit={handleRegister}>
            <h1>Sing up</h1>
            <label>
                <input
                    type="text"
                    placeholder={"User name"}
                    maxLength={50}
                    required
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
            </label>
            <label>
                <input
                    type="password"
                    placeholder={"Password"}
                    maxLength={50}
                    required
                    value={form.password}
                    onChange={e => updateForm('password', e.target.value)}
                />
            </label>
            <label>
                <input
                    type="password"
                    placeholder={"Confirm password"}
                    maxLength={50}
                    required
                    value={form.confirm_password}
                    onChange={e => updateForm('confirm_password', e.target.value)}
                />
            </label>
            {loading ? <Spinner/> : <Button buttonName={"sing up"}/>}
            <NavButton buttonName={"login"} to={"/login"} infoText={"If you have account? please "}/>
        </form>
    )
}