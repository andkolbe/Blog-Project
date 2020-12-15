import * as React from 'react';
import type { IBlog } from '../utils/Types';
import PreviewCard from '../components/PreviewCard';

const Home: React.FC<HomeProps> = props => { // FC stands for function component. Home is a function component

    const [blogs, setBlogs] = React.useState<IBlog[]>([]); 
    // useState is just a function and what's passed into it is what the default state is 
    // it always returns an array. it will always be written as two values destructured inline
    // the first value is always the current state at every iteration of the render function 
    // the second value is a function that will allow us to update our current state 

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/blogs');
            const blogs = await res.json();
            setBlogs(blogs);
        })()
    }, []);

    return (
        <main className="container">
            <section className="row">
            {blogs.map(blog => (
                <PreviewCard key={`blog-preview-${blog.id}`} blog={blog} />
            ))}
            </section>
        </main>
        // state is stored on the keys so they must be unique to each component that is generated
    );
}

interface HomeProps { }

export default Home;


