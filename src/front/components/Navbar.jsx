import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate();

	const token = localStorage.getItem("token");

	const handleLogout = () => {

		// borrar token
		localStorage.removeItem("token");

		// borrar user
		localStorage.removeItem("user");

		// redirect
		navigate("/signin");

		// refrescar navbar
		window.location.reload();
	};

	return (

		<nav className="navbar navbar-expand-lg navbar-dark bg-black">

			<div className="container">

				{/* LOGO / NOMBRE APP */}
				<Link to="/" className="navbar-brand fw-bold">
					AccessiAudit
				</Link>

				<div className="d-flex align-items-center gap-3">

					{
						token ? (
							<>
								<Link
									to="/private"
									className="text-white text-decoration-none"
								>
									Dashboard
								</Link>

								<Link
									to="#"
									className="text-white text-decoration-none"
								>
									My Audits
								</Link>

								<Link
									to="#"
									className="text-white text-decoration-none"
								>
									Reports
								</Link>

								<Link
									to="#"
									className="text-white text-decoration-none"
								>
									Settings
								</Link>

								<button
									className="btn btn-danger"
									onClick={handleLogout}
								>
									Logout
								</button>

							</>

						) : (

							<>
								<Link to="/signup">
									<button className="btn btn-primary">
										Sign Up
									</button>
								</Link>

								<Link to="/signin">
									<button className="btn btn-outline-light">
										Sign In
									</button>
								</Link>

							</>
						)
					}
				</div>
			</div>
		</nav>
	);
};