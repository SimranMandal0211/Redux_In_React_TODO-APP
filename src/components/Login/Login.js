import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login(){
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Date: ", form);

        navigate("/");
    }

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit}
                className="login-form"
            >
                <h2>Login</h2>

                <input type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>

                <p>
                    Don't have an account?  
                    <Link to="/signup" className="sign-up-link">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}