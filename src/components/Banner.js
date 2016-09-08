
import React from 'react';
import style from '../styles/styles.css';

const PausedBanner = ({label, color}) => (
	<div className={style.banner}>
		<h1 style={{ paddingTop: '250px', color }}>{label}</h1>
	</div>
);

export default PausedBanner;



