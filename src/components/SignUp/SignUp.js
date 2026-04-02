import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './SignUp.css';

export default function SignUp(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Signup Date:", form);

        navigate("/login");
    };
    
    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} 
            className="signup-form">
                <h2>Sign Up</h2>
                <input type="text" name="name" 
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                required
                />

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

                <button type="submit">Sign Up</button>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}