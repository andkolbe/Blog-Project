import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Admin from './views/Admin';
import Contact from './views/Contact';
import Details from './views/Details';
import Donate from './views/Donate';
import Home from './views/Home';
import Login from './views/Login';
import NewPost from './views/NewPost';
import NotFound from './views/NotFound';
import Register from './views/Register';

const App: React.FC<AppProps> = props => {

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
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/contact'>
					<Contact />
				</Route>
				<Route exact path='/donate'>
					<Donate />
				</Route>
				<Route exact path='/register'>
					<Register />
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



