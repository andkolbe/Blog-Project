import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Admin from './views/Admin';
import Details from './views/Details';
import Home from './views/Home';
import NewPost from './views/NewPost';
import NotFound from './views/NotFound';

const App: React.FC<AppProps> = (props, state) => {

	return (
		<BrowserRouter>
		<NavBar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/new'>
					<NewPost />
				</Route>
				<Route exact path='/details/:id'>
					<Details />
				</Route>
				<Route exact path='/admin/:id'>
					<Admin />
				</Route>
				<Route exact path='*'>
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

// interface is a way to define a type 
interface AppProps {} // this is blank because App in index.tsx is not recieving any props

export default App;



