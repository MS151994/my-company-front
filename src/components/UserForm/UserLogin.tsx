import {SyntheticEvent, useState} from "react";
import {Button} from "../utils/Button/Button";
import {Spinner} from "../utils/Spinner/Spinner";
import './userForm.css';

export const UserLogin = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        password: '',
    });

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value
        }));
    }

    const handleLogin = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('http://localhost:3001', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })
            const data = await res.json();
            console.log(data);
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
        </form>
    )
}