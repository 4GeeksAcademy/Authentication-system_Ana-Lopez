import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	return (
		 <div className="container-fluid min-vh-100 d-flex align-items-center bg-light justify-content-center">

            <div className="container">

                <div className="row justify-content-center text-center">

                    <div className="col-12 col-md-10 col-lg-8">

                        <div className="card shadow-lg border-0 p-4 p-md-5 rounded-4">

                            <h1 className="display-4 fw-bold mb-4">
                                Welcome to Authentication with JWT 🔐
                            </h1>

                            <p className="lead text-secondary mb-4">
                                This project demonstrates a complete authentication
                                system using React, Flask, JWT, protected routes,
                                signup, signin and logout functionality.
                            </p>

                            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">

                                <a
                                    href="/signup"
                                    className="btn btn-primary btn-lg px-4"
                                >
                                    Create Account
                                </a>

                                <a
                                    href="/signin"
                                    className="btn btn-outline-dark btn-lg px-4"
                                >
                                    Sign In
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
	);
}; 