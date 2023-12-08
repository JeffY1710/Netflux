// src/components/Form.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Connexion, disconnect, isConnected } from "../../data/firebase/global";

interface FormData {
	email: string;
	password: string;
}

const Form: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission, e.g., send data to server
		Connexion(formData.email, formData.password)
		if (isConnected() == true) {
			console.log("connected");
		}else{
			console.log("not");
		}
	};

	return (
		<>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
    </style>
			<h1 className='title'>Connexion</h1>
			<div className='box'>
				<form >
					<div className='input-wrapper'>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							placeholder='Adresse e-mail'
						/>
					</div>

					<div className='input-wrapper'>
						<input
							type='password'
							id='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							placeholder='Mot de passe'
						/>
					</div>
					<button type='submit' className='btn' onClick={handleSubmit}>
						Se connecter
					</button>
					<button onClick={disconnect}>logout</button>
					<Link to="/motdepasseoublie" className='button2' >
									Mot de passe oublié ?
					</Link>
				</form>
			</div>
		</>
	);
};

export default Form;