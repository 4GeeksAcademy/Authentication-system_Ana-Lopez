import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const Navbar = () => {

	const navigate = useNavigate();

	const handleLogout = () => {

		// borrar token
		localStorage.removeItem("token");

		// borrar user
		localStorage.removeItem("user");

		// redirect
		navigate("/signin");
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">JWT Authentication Demo</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-primary">Sing Up!</button>
					</Link>
					<button className="btn btn-danger" onClick={handleLogout}>Logout</button>
				</div>
			</div>
		</nav>
	);
};