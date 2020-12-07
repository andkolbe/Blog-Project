import * as React from 'react';
import Layout from '../components/Layout';

const NewPost: React.FC<NewPostProps> = props => {

    const [title, setTitle] = React.useState(''); // typescript will infer these are strings. you don't have to write <string>
    const [content, setContent] = React.useState('');

    const submitBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // prevents the form from refreshing the page before the POST promise can execute. Otherwise the click will reset the page with black form data
        const res = await fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // this will inform the request to the server, that it contains within it, a req.body of data type json
            }, // this will kick on the express.json middleware on the server.ts to transcribe the body
            body: JSON.stringify({ title, content })
        })
        if (res.ok) {
            const serverPost = await res.json();
            console.log(serverPost);
        }

        setTitle('');
        setContent('');
    }

    return ( // return is always written after the methods
        <Layout>
            <form className="form-group border p-4 shadow bg-white">
                 <label htmlFor="name" className="font-weight bold"></label>
                 <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control bg-warning"/>
                 <label htmlFor="message" className="mt-4 font-weight-bold"></label>
                 <textarea value={content} onChange={e => setContent(e.target.value)} rows={6} className="form-control my-1 bg-warning"></textarea>
                 <button onClick={submitBlog} className="btn btn-success mt-4 font-weight-bold">Button</button>
            </form>
        </Layout>
    );
}

interface NewPostProps {}

export default NewPost;