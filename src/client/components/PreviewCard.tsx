import * as React from 'react';
import * as moment from 'moment';
import { IBlog } from '../utils/Types';
import { Link } from 'react-router-dom';

const PreviewCard: React.FC<PreviewCardProps> = ({ blog }) => { // FC stands for function component. PreviewCard is a function component
//const PreviewCard = (props: PreviewCardProps) => { // Another way to write this.direct strong tyoing props 
    return (
        <div className="col-md-4">
            <article className="card my-2 shadow ">
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