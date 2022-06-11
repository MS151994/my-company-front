import {SyntheticEvent, useState} from "react";
import {Button} from "../utils/Button/Button";
import {Spinner} from "../utils/Spinner/Spinner";
import {NavButton} from "../utils/NavButton/NavButton";
import {useCookies} from "react-cookie";
import {config} from "../../config/config";
import './userForm.css';

export const UserLogin = () => {
    const [cookie, setCookie] = useCookies(['user', 'username']);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        password: '',
    });

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value.toLowerCase()
        }));
    }

    const handleLogin = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(config.api, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })
            const data = await res.json();
            setCookie('user', data.id, {path: '/'});
            setCookie('username', data.name, {path: '/'});
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className={"userForm__container"} onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <label>
                <input
                    type="text"
                    placeholder={"User name"}
                    maxLength={50}
                    required
                    value={form.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                />
            </label>
            <label>
                <input
                    type="password"
                    placeholder={"Password"}
                    maxLength={50}
                    required
                    value={form.password}
                    onChange={(e) => updateForm('password', e.target.value)}
                />
            </label>
            {loading ? <Spinner/> : <Button buttonName={"login"}/>}
            <NavButton buttonName={"sing up"} to={"/register"} infoText={"You don't have an account? please "}/>
        </form>
    )
}