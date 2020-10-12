import React from 'react';
import NewsCard from './NewsCard';
import SourceCard from './SourceCard';
import News from '../../../entities/News';
import Source from '../../../entities/Source';
/**
 * Render articles as a row of NewsCard
 * @param {Object} _props component props
 */
function RenderArticles(_props) {
    let props = _props || {};
    let articles = props.articles || [];
    let renderMarkup;

    renderMarkup = articles.map((item, k) => {
        let news = new News(item);
        return (
            <NewsCard
                key={`news-${k}`}
                title={news.title}
                description={news.description}
                author={news.author}
                source={news.source}
                sourceId={news.sourceId}
                imageSrc={news.imageSrc}
                url={news.url}
                publishedAt={news.publishedAt}
            />
        );
    });
    return renderMarkup;
}

/**
 * Render sources as a row of source cards
 * @param {Object} _props component props
 */
function RenderSources(_props) {
    let props = _props || {};
    let sources = props.sources || [];
    let renderMarkup;

    renderMarkup = sources.map((item, k) => {
        let source = new Source(item);
        return (
            <SourceCard
                key={`sources-${k}`}
                id={source.id}
                name={source.name}
                description={source.description}
                category={source.category}
            />
        );
    });
    return renderMarkup;
}

/**
 * Render results as rows containing cards
 * @param {Object} _props component props
 */
function ResultsContent(_props) {
    let props = _props || {};
    let contentType = props.contentType;
    let isArticles = (contentType === 'articles');
    let isSources = (contentType === 'sources');

    let renderMarkup = (
        <div aria-label="Page is loading" className="loading">Loading...</div>
    );

    if (isArticles) {
        renderMarkup = (<RenderArticles articles={props.articles} />);
    }
    if (isSources) {
        renderMarkup = (<RenderSources sources={props.sources} />);
    }

    return (
        <div className={`results ${contentType}`}>
            <div className="row">
                {renderMarkup}
            </div>
        </div>
    );
}

export default ResultsContent;
