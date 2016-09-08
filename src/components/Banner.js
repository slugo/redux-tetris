import React from 'react';

const PausedBanner = ({label, color, opacity}) => {
	const banner = {
		background: `rgba(0,0,0,${opacity})`,
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0px',
	};

	return (
		<div style={banner}>
			<h1 style={{ paddingTop: '250px', color }}>{label}</h1>
		</div>
	);
};

export default PausedBanner;



