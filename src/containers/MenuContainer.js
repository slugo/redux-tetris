import { connect } from 'react-redux';
import Menu from '../components/Menu.js';

const mapStateToProps = (state) => ({
	isPlaying: state.isPlaying,
});

const MenuContainer = connect(
    mapStateToProps
)(Menu);

export default MenuContainer;
