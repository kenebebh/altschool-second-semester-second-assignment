import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Fallback from './pages/Fallback';

import Home from './pages/Home';
import Notfound from './pages/Notfound';

const UsersLazyLoad = React.lazy(() => import('./pages/Users'));

function App() {
	return (
		<div className="App">
			<ErrorBoundary FallbackComponent={Fallback}>
				<ul className="App-nav-li">
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/users">Users</Link>
					</li>
				</ul>
				<nav />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/users"
						element={
							<React.Suspense fallback="LOADING......">
								<UsersLazyLoad />
							</React.Suspense>
						}
					/>
					<Route path="*" element={<Notfound />} />
				</Routes>
			</ErrorBoundary>
		</div>
	);
}

export default App;
