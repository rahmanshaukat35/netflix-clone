import React from 'react';
import ContactCard from '../components/ContactCard';
import styles from './contact.module.css';
import ContactForm from '../components/ContactForm';
const Contact = () => {
	return (
		<>
			<div className={styles.container}>
				<h1>Contact Us</h1>
				<ContactCard />
				<section className={styles.contact_section}>
					<h2>
						We'd love to hear <span> from you </span>
					</h2>
					<ContactForm />
				</section>
			</div>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046951448!2d72.92449278910783!3d31.423759038547185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1683171451447!5m2!1sen!2s'
				width={100}
				height={450}
				style={{ border: 0 }}
				allowfullscreen=''
				loading='lazy'
				className={styles.mapping}
				referrerpolicy='no-referrer-when-downgrade'
			></iframe>
		</>
	);
};

export default Contact;
