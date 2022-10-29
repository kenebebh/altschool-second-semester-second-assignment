import React from 'react';
import { Link } from 'react-router-dom';

export default function Fallback() {
	return (
		<>
			<h1 style={{ color: 'red', fontSize: '2rem', marginBottom: '5rem' }}>
				Sorry, something went wrong!
			</h1>

			<Link to="/">Go back to the Home Page</Link>
		</>
	);
}
