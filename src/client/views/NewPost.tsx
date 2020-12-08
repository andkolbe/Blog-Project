import * as React from 'react';
import api from '../utils/api-service';
import type { ITag } from '../utils/Types';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';


const NewPost: React.FC<NewPostProps> = props => {

    const history = useHistory();

    const [title, setTitle] = React.useState(''); // typescript will infer these are strings. you don't have to write <string>
    const [content, setContent] = React.useState('');
    const [selectedTagid, setSelectedTagid] = React.useState('0');

    const [tags, setTags] = React.useState<ITag[]>([]);

    React.useEffect(() => {
        api('/api/tags').then(tags => setTags(tags))
    }, []);

    const submitBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // prevents the form from refreshing the page before the POST promise can execute. Otherwise the click will reset the page with black form data
        api('/api/blogs', 'POST', { title, content })
        .then(blogPost => {
            if (selectedTagid !== '0') {
                api('/api/blogtags', 'POST', { blogid: blogPost.id, tagid: selectedTagid })
                .then(() => setSelectedTagid('0')) // back to the default placeholder: Select a Tag...
                history.push('/');
            } 
        });
        
    };
    
    return ( // return is always written after the methods
        <Layout>
            <form className="form-group border p-4 shadow bg-white">
                 <label htmlFor="name" className="font-weight-bold">Title</label>
                 <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control bg-warning"/>
                 <label className="font-weight-bold mt-4">Tags</label>
                 <select value={selectedTagid} onChange={e => setSelectedTagid(e.target.value)} className="form-control">
                     <option value="0">Select a Tag ...</option>
                     {tags.map(tag => (
                         <option key={`tag-key-${tag.id}`} value={tag.id}>{tag.name}</option>
                     ))}
                 </select>
                 <label className="mt-4 font-weight-bold">Content</label>
                 <textarea value={content} onChange={e => setContent(e.target.value)} rows={6} className="form-control my-1 bg-warning"></textarea>
                 <button onClick={submitBlog} className="btn btn-success mt-4 font-weight-bold">Button</button>
            </form>
        </Layout>
    );
}

interface NewPostProps {}

export default NewPost;


/*

const getAuthors = async () => {
    try {
        const res = await fetch('/api/authors');
        if (res.ok) { // .ok comes from fetch. res.ok is a boolean. False is 404, 401, 500, not found, etc
            return await res.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAuthors
}



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

*/
