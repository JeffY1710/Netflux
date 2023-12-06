// src/components/Form.tsx
import React, { useState } from "react";
import "./connexion.css";
import { Link } from "react-router-dom";
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
		console.log("Form data submitted:", formData);
	};

	return (
		<>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
    </style>
			<h1 className='title'>Connexion</h1>
			<div className='box'>
				<form onSubmit={handleSubmit}>
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
					<button type='submit' className='btn'>
						Se connecter
					</button>
          <Link to="/motdepasseoublie" className='button2' >
						Mot de passe oublié ?
            </Link>

            <Link to="/inscription" className='button2' >
						Se créer un compte
            </Link>
				</form>
			</div>
		</>
	);
};

export default Form;