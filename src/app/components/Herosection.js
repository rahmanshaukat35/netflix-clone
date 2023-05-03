import React from 'react';
import heroStyles from '../styles/herosection.module.css';
import styles from '../styles/common.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
const Herosection = () => {
	return (
		<main className={heroStyles.main_section}>
			<div className={styles.container}>
				<div className={styles.grid_two_section}>
					<div className={heroStyles.hero_content}>
						<h1>LET'S WATCH MOVIE TOGETHER</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
							cumque blanditiis a voluptatem recusandae nesciunt iste aut,
							numquam ut. Nemo, saepe. Illum quod, fuga tempora, fugit
							voluptates quo tempore quos maxime reiciendis officia nihil nulla?
						</p>
						<Link href='/movie'>
							<button>Explore Movies</button>
						</Link>
					</div>
					<div className={heroStyles.hero_image}>
						<Image
							src='/about1.svg'
							alt='watching netflix'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Herosection;