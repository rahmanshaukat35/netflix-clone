'use client';
import React, { useState } from 'react';
import styles from '../contact/contact.module.css';
import { Mulish } from 'next/font/google';
import { useForm } from 'react-hook-form';
const mulish = Mulish({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});
const initialState = {
	username: '',
	email: '',
	phone: '',
	message: '',
};
const ContactForm = () => {
	// const [state, setState] = useState(initialState);
	const { register, handleSubmit } = useForm();
	const formSubmit = () => {
		console.log('form submit');
	};
	return (
		<form className={styles.contact_form} onSubmit={handleSubmit(formSubmit)}>
			<div className={styles.input_field}>
				<label htmlFor='username' className={styles.label}>
					Enter your name:
					<input
						type='text'
						name='username'
						id='username'
						placeholder='Enter your name'
						className={mulish.className}
						{...register('username', { required: true })}
					/>
				</label>
			</div>
			<div className={styles.input_field}>
				<label htmlFor='email' className={styles.label}>
					Enter your email:
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter your email'
						className={mulish.className}
						{...register('email', { required: true })}
					/>
				</label>
			</div>
			<div className={styles.input_field}>
				<label htmlFor='userphone' className={styles.label}>
					Enter your number:
					<input
						type='number'
						name='userphone'
						id='userphone'
						placeholder='Enter your number'
						className={mulish.className}
						{...register('phone')}
					/>
				</label>
			</div>
			<div className={styles.input_field}>
				<label htmlFor='message' className={styles.label}>
					Message:
					<textarea
						name='message'
						id='message'
						placeholder='Enter your message'
						rows={5}
						className={mulish.className}
						{...register('message')}
					/>
				</label>
			</div>
			<div>
				<button type='submit' className={mulish.className}>
					Send Message
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
