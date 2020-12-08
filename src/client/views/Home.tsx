import * as React from 'react';
import Layout from '../components/Layout';
import type { IBlog } from '../utils/Types';
import { Link } from 'react-router-dom';

const Home: React.FC<HomeProps> = props => { // FC stands for function component. Template is a function component

    const [blogs, setBlogs] = React.useState<IBlog[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/blogs');
            const blogs = await res.json();
            setBlogs(blogs);
        })()
    }, []);

    return (
        <Layout>
            {blogs.map(blog => (
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.content}</p>
                    </div>
                </div>
            ))}
        </Layout>
    );
}

interface HomeProps {}

export default Home;


