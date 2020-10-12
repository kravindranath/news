let _get = require('lodash/get');
let stripTags = require('../helpers').stripTags;

/**
 * Create News constructor
 * @param {Object} _item data from API
 * @returns {Object}
 */
function News(_item) {
    let item = _item || {};
    let { title, description, urlToImage, publishedAt, author, source, url } = { ...item };

    this.title = title;
    this.description = stripTags(description);
    this.imageSrc = urlToImage;
    this.source = _get(source, 'name', '');
    this.sourceId = _get(source, 'id', '');
    this.author = stripTags(author) || '';
    this.url = url;
    this.publishedAt = publishedAt || '';

    return this;

}

module.exports = News;
