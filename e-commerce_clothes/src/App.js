import React from 'react';
import './App.css';
import Routes from './components/Routes/Routes';
import Header from './components/Header/Header';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

function App() {

	return (
		<>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						{Routes.map( (route) => (
								<Route key={route.name} exact={route.isExact} path={route.path}>
									{route.component}
								</Route>
							)
						)}
					</Switch>
				</div>
			</BrowserRouter>
		</>
	);
}


export default App;
