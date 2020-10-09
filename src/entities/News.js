import _get from 'lodash/get';
import { stripTags } from '../helpers';

function News(_item){
    let item = _item || {};
    let { title, description, urlToImage, publishedAt, author, source } = { ...item };
    
    this.title = title;
    this.description = stripTags(description);
    this.imageSrc = urlToImage;
    this.source = _get(source, 'name', '');
    this.author = author || '';
    this.publishedAt = publishedAt || '';

    return this;

}

export default News;