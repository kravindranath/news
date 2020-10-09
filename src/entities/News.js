import _get from 'lodash/get';

function News(_item){
    let item = _item || {};
    let { title, description, urlToImage, publishedDate, author, source } = { ...item };
    
    this.title = title;
    this.description = description;
    this.imageSrc = urlToImage;
    this.source = _get(source, 'name', '');
    this.author = author;
    this.publishedDate = publishedDate || '';

    console.log(this)

    return this;

}

export default News;