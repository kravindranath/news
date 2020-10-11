import React from 'react';
import { Link } from 'react-router-dom';

function SourceCard(_props) {
    let props = _props || {};
    let { key, id, name, description, category } = { ...props };

    return (
        <div className={`source ${category}`} key={`source-${key}`}>
            <Link to={`/news/${id}`}>
                <p className="name">{name}</p>
                <p className="description">{description}</p>
            </Link>
        </div>
    );
}

export default SourceCard;