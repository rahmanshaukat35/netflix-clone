import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css';
const Movie = async () => {
	const url = process.env.RAPID_KEY;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'eda76fa03emsh79700010d0b1d76p1048afjsn4ccd9f3b5b97',
			'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
		},
	};
	const res = await fetch(url, options);
	const data = await res.json();
	const main_data = data.titles;
	return (
		<>
			<section className={styles.movieSection}>
				<div className={styles.container}>
					<h1>Series & Movies</h1>
					<div className={styles.card_section}>
						{main_data.map((curElem) => {
							return <MovieCard key={curElem.id} {...curElem} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Movie;
