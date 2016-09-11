import React from 'react';
import style from '../styles/styles.css';
import { loadMenu } from '../actions/index.js';

class Menu extends React.Component {
	componentDidMount() {
		this.props.dispatch(loadMenu());
	}
	render() {
		if (!this.props.isPlaying) {
			return (
				<div>
					<h1 className={style.pageBanner}>REDUX TETRIS</h1>
					<h2>Press spacebar to start the game</h2>
				</div>
			);
		}
		return null;
	}
}
Menu.propTypes = {
	isPlaying: React.PropTypes.bool,
};

export default Menu;
