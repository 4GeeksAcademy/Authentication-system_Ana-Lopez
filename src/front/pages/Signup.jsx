import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const navigate = useNavigate();

    // STATES
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    // FUNCION DEL FORM
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_URL + "/api/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        username: username
                    })
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok) {

                alert("Usuario creado correctamente");

                // REDIRECCION
                navigate("/login");

            } else {

                alert(data.msg);

            }

        } catch (error) {

            console.log(error);
            alert("Error en el servidor");

        }
    };

    return (

        <div className="container mt-5">

            <h1>Signup</h1>

            <form onSubmit={handleSubmit}>

                {/* USERNAME */}
                <div className="mb-3">

                    <label className="form-label">
                        Username
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </div>

                {/* EMAIL */}
                <div className="mb-3">

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                {/* PASSWORD */}
                <div className="mb-3">

                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                <button className="btn btn-primary">
                    Create account
                </button>

            </form>

        </div>
    );
};