import React from 'react';
import NewsCard from './NewsCard';
import News from '../../../entities/News';

function NewsContent(_props){
    let props = _props || {};
    let articles = props.articles || [];
    let renderMarkup;

    if(articles.length === 0){
        renderMarkup = (
            <div aria-label="Page is loading" className="loading">Loading...</div>
        );
    }else{
        renderMarkup = articles.map((item,k)=>{
            let news = new News(item);
            return (
                <NewsCard
                    key={`news-${k}`}
                    title={news.title}
                    description={news.description}
                    author={news.author}
                    source={news.source}
                    imageSrc={news.imageSrc}
                    url={news.url}
                    publishedAt={news.publishedAt}
                    />
            );
        }); 
    }

    return (
        <div className="results">
            <div className="row">
                {renderMarkup}
            </div>
        </div>
    );
}

export default NewsContent;
