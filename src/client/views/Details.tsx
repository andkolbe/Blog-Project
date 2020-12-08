import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IBlog } from '../utils/types';

const Details: React.FC<DetailsProps> = props => {
    const { id } = useParams();
    const history = useHistory();

    const [blog, setBlog] = React.useState<IBlog>(null);

    const [blogtags, setBlogTags] = React.useState(null);

    React.useEffect(() => {
        const getBlog = async () => {
            const blogRes = await fetch(`/api/blogs/${id}`)
            const blog = await blogRes.json();
            const blogTagsRes = await fetch(`/api/blogtags/${id}`)
            const blogtags = await blogTagsRes.json();
            setBlog(blog);
            setBlogTags(blogtags);
        };
        getBlog();
    }, [id]) // we can rerun this effect when id changes value

    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">

                </div>
            </section>
        </main>
    );
}

interface DetailsProps {}

export default Details;