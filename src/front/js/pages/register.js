import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../../styles/register.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Register = () => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const MySwal = withReactContent(Swal);
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			name: name,
			last_name: lastName,
			email: email,
			password: password
		};

		fetch("https://3001-maroon-viper-y4y3mj7h.ws-us07.gitpod.io/api/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setAuth(true);
				MySwal.fire({
					icon: "success",
					title: <p>Se ha registrado de forma éxitosa!</p>
				});
			})
			.catch(err => console.log(err));
	};

	const handleCheck = e => {
		// e.preventDefault();
		setIsProvider(!isProvider);
		setRole(!role);
	};

	return (
		<div>
			<br />
			<br />
			<div className="register mx-auto py-4 px-4">
				<h3>Registro</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="vendor"> Deseas registrarte como proveedor de servicios?</label>
						<input type="checkbox" name="checkbox" onChange={handleCheck} />
						<p id="text" style={{ display: isProvider ? "block" : "none" }}>
							<small>
								<i>
									Al registrarte como proveedor de servicios, deberás ingresar más datos personales e
									incluso, adjuntar tu hoja de delincuencia. Gracias por querer ser parte de la mejor
									red de profesionales!
								</i>
							</small>
						</p>
					</div>
					<div className="mb-3">
						<label className="form-label">Correo Electrónico</label>
						<input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Nombre</label>
						<input onChange={e => setName(e.target.value)} type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Apellidos</label>
						<input onChange={e => setLastName(e.target.value)} type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Contraseña</label>
						<input
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Confirmar Contraseña</label>
						<input
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<button type="submit" className="btn btn-dark">
						Enviar
					</button>
				</form>
				{auth ? <Redirect to="/login" /> : null}
			</div>
		</div>
	);
};

export default Register;