import * as React from 'react';
import * as moment from 'moment';
import Layout from '../components/Layout';
import { IBlog } from '../utils/Types';
import { Link } from 'react-router-dom';

const PreviewCard: React.FC<PreviewCardProps> = ({ blog }) => { // FC stands for function component. PreviewCard is a function component
//const PreviewCard = (props: PreviewCardProps) => { // Another way to write this.direct strong tyoing props 
    return (
        <div className="col-md-4">
            <article className="card my-2 shadow ">
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" className="card-img-top" alt="Forest" />
                <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text">{blog.content.substring(0, 125)}</p>
                    <div className="d-flex justify-content-between">
                        <small className="card-text text-secondary">{moment(blog.created_at).format('dddd')}</small>
                        <Link to={`/details/${blog.id}`}>Read more!</Link>
                    </div>

                </div>
            </article>
        </div>
    );
}

interface PreviewCardProps {
    blog: IBlog
}

export default PreviewCard;