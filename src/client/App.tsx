import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
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
				<Route exact path='/post'>
					<NewPost />
				</Route>
				<Route exact path='/details'>
					<Details />
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

// BrowserRouter can be renamed anything
// think of Switch like a switch board
// Route is not self closing when using Hooks
// path reads the url bar
// Route paths need to have the word exact or they will only route in alphbetical order
// you can render NavBar above Switch. Switch acts like the body of the page
// NavBar won't re render because it is above the Switch

// hitting enter on a url bar executes a GET request to a server


