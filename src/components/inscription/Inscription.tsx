// src/components/Form.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Inscription, getCollection, getUserById, isEmailValid } from "../../data/firebase/global"
import { Alert, Snackbar } from "@mui/material";

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

const Form2: React.FC = () => {
	const [emailVerif, setEmailVerif] = useState(false); 
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setEmailVerif(isEmailValid(formData.email));
		Inscription(formData.firstName, formData.lastName, formData.email, formData.password)
		console.log(getCollection("users"));
		console.log("test");
		console.log(getUserById("AFzubidROKHpWRKEKeJr"));
		
		
	};
	

	return (
		<>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
    </style>
			<h1 className='title'>Inscription</h1>
			<div className='box'>
				<form>
					<div className='input-wrapper'>
						
							<input
								type='text'
								id='firstName'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								placeholder='Prénom'
							/>
						</div>
						<div className="input-wrapper">
							<input
								type='text'
								id='lastName'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								placeholder='Nom'
							/>
						</div>
						<div className="input-wrapper">
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Adresse e-mail'
							/>
							{!emailVerif && (
								<Alert severity="error">Entrer un email conforme</Alert>
							)}
						</div>

						<div className="input-wrapper">
							<input
								type='password'
								id='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								placeholder='Mot de passe'
							/>
						</div>
					<button type='submit' className="btn" onClick={handleSubmit}>S'inscrire</button>

					
            <Link to="/connexion" className='button2' >
						Déjà un compte ?
            </Link>
            
				</form>
			</div>
		</>
	);
};

export default Form2;
