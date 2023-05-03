import React from 'react';

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
	return <div> movie page</div>;
};

export default Movie;
