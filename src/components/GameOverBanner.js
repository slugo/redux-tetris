import React from 'react';
import style from '../styles/styles.css';

const GameOverBanner = () => (
	<div className={style.pausedBanner}>
		<h1 style={{ paddingTop: '250px', color: 'red' }}>GAME OVER</h1>
        <h2>Final Score</h2>
        <h2>{points}</h2>
	</div>
);

export default GameOverBanner;



