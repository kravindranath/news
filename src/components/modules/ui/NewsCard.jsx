import React from 'react';
import { formatDateShort } from '../../../helpers';

function NewsCard(_props) {

    let props = _props || {};
    let { key, title, author, source, imageSrc, description, publishedAt, url } = { ...props };
    let dateLabel = formatDateShort(publishedAt);

    if(author.length && (author.indexOf('http') === -1)){
        author = `${author}`;
    }

    if(author) {
        dateLabel = ` - ${dateLabel}`;
    }

    return (
        <a className="news" key={`news-${key}`} href={url}>
            <div className="title-wrap">
                <h3 role="heading" className="title" aria-label={title} aria-describedby="description">{title}</h3>
                <span className="author">{author}</span>
                <span className="source">{source}</span>
                <span className="date">{dateLabel}</span>
            </div>
            <div className="img">
                {
                    imageSrc && <img loading="lazy" alt={title} src={imageSrc} />
                }
            </div>
            <div className="desc" id="description">
                <p className="description">{description}</p>
            </div>
            <div className="clearBoth"></div>
        </a>
    );

}

export default NewsCard;