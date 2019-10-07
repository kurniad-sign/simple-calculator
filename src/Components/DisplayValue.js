import React from 'react';

export default function DisplayValue({ value }) {
	return (
		<div className="display-num">
			<h1>{value}</h1>
		</div>
	);
}
