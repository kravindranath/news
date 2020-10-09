import React from 'react';
import { formatDateShort } from '../../../helpers';

function NewsCard(_props) {

    let props = _props || {};
    let { key, title, author, source, imageSrc, description, publishedAt } = { ...props };
    let dateLabel = formatDateShort(publishedAt);

    if(author.length && (author.indexOf('http') === -1)){
        author = `${author}`;
    }

    if(author) {
        dateLabel = ` - ${dateLabel}`;
    }

    return (
        <div className="news" key={`news-${key}`}>     
            <div className="title-wrap">
                <h3 className="title">{title}</h3>
                <span className="author">{author}</span>
                <span className="source">{source}</span>
                <span className="date">{dateLabel}</span>
            </div>
            <div className="img">
                {
                    imageSrc && <img loading="lazy" alt={title} src={imageSrc} />
                }
            </div>
            <div className="desc">
                <p className="description">{description}</p>
            </div>
            <div className="clearBoth"></div>
        </div>
    );

}

export default NewsCard;