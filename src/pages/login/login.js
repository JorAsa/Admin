import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import iconUser from "../../assets/images/images.png";

export const Login = () => {
    const [colorPassword, setColorPassword] = useState();
    const [colorEmail, setColorEmail] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();
    const passwordRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useMemo(() => {
        if (email === "admin@admin.ru") {
            setColorEmail("green");
            passwordRef.current.focus();
        } else {
            setColorEmail("#ff8b0f");
        };
    }, [email]);

    useMemo(() => {
        if (password === "admin") {
            setColorPassword("green");
        } else {
            setColorPassword("#ff8b0f");
        };
    }, [password]);

    useMemo(() => {
        if (email === "admin@admin.ru" && password === "admin") {
            setTimeout(() => {
                navigate('/landing');
            }, 300);
        };
    }, [email, password])

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();

        if (email === "admin@admin.ru" && password === "admin") {
            navigate('/landing');
        } else if (email !== "admin@admin.ru") {
            alert('"' + email + '" Email-@ goyutyun chuni!');
            setColorEmail("red");
        } else if (password !== "admin") {
            alert('"' + password + '" Password-@ sxal e!');
            setColorPassword("red");
        };
    }, []);

    return (
        <div className="divForm">
            <form onSubmit={handleSubmit} className="form">
                <img src={iconUser} className="iconUser" />
                <input className="formInput" placeholder="Email" type="email" required={true} onChange={(event) => setEmail(event.target.value)} style={{ color: colorEmail }} ref={emailRef} />
                <input className="formInput" placeholder="Password" type="password" required={true} onChange={(event) => setPassword(event.target.value)} style={{ color: colorPassword }} ref={passwordRef} />
                <button className="formButton">Log In</button>
            </form>
        </div>
    );
};