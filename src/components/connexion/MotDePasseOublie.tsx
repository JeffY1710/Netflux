// src/components/Form.tsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface FormData {
	
	email: string;
	
}


const Form2: React.FC = () => {

	const navigate = useNavigate();


	const [formData, setFormData] = useState<FormData>({
		
		email: "",

		
		
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission, e.g., send data to server
		console.log("Form data submitted:", formData);

		alert('Un e-mail de réinitialisation vous a été envoyé par mail');
		navigate('/');
		;

		
		
	};

	return (
		<>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
    </style>
			<h1 className='title'>Réinitialiser votre mot de passe</h1>
			<div className='box'>
				<form>
					
						<div className="input-wrapper">
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Adresse e-mail'
							/>
						</div>

						
					<button type='submit'  
					onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
					className="btn" onSubmit={handleSubmit}>Continuer</button>

				</form>
			</div>
		</>
	);
};

export default Form2;
