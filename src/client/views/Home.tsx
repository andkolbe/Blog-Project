import * as React from 'react';
import Layout from '../components/Layout';
import apiService from '../utils/api-service';
import type { IAuthor } from '../utils/Types';

const Home: React.FC<HomeProps> = props => {

    // multiple useState hooks always fire in the order they are written
    const [authors, setAuthors] = React.useState<IAuthor[]>([]); // whatever is passed into useState is the default for that initial state. authors = []
    const [selectedAuthorid, setSelectedAuthorid] = React.useState('0'); // page loads with initial render of value 0 (Select an Author...)
    const [error, setError] = React.useState<string>(null);

    React.useEffect(() => {
        apiService.getAuthors().then(authors => setAuthors(authors)); // abstracting business logic away from render logic
    }, []);

    const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => { // add functions to be able to update or change state
        if (e.target.value === '0') {
            setError('Select an author');

            return;
        }
        setSelectedAuthorid(e.target.value)
    }

    const submitBlog = (e: React.MouseEvent<HTMLButtonElement>) => { // add functions to be able to update or change state
        e.preventDefault();
        if (selectedAuthorid === '0') {
            setError('Select an author');

            return;
        }
    }

    return (
        <Layout>
            <form className="form-group p-3 border rounded lg shadow-sm">
                <label>List of Authors</label>
                <select value={selectedAuthorid} onChange={handleAuthorChange} className="form-control"> 
                    <option value="0">Select an Author ...</option>
                    {authors.map(author => (
                        <option key={`author-option-${author.id}`} value={author.id}>{author.name}</option> // add a key any time you do an array map
                    ))}
                </select>
                <button onClick={submitBlog} className="btn btn-outline-primary btn-block w-75 mx-auto mt-3">Write Blog</button>
            </form>
            <p className="text-center">{error}</p>
        </Layout>
    );
    // value is initally selectedAuthorid and then changes on an event (such as choosing an option from the drop down) to setSelectedAuthorid
}

interface HomeProps {}

export default Home;