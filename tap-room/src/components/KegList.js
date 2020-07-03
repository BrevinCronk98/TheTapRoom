import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
	return (
		<React.Fragment>
			{props.kegList.map((keg) => (
				<Keg
					kegBrand={keg.kegBrand}
					kegName={keg.kegName}
					kegPrice={keg.kegPrice}
					kegAlcoPerc={keg.kegAlcoPerc}
					kegQuantity={keg.kegQuantity}
				/>
			))}
		</React.Fragment>
	);
}
KegList.propTypes = {
	kegList: PropTypes.array,
	onKegSelection: PropTypes.func
};

export default KegList;
