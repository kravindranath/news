const mocha = require('mocha');
const chai = require('chai');

const { describe } = mocha;
const { it } = mocha;
const { expect } = chai;

const News = require('../News');

describe('Entity News: ', function () {
  it('should create with all props', function () {
    const mockData = {
      source: {
        id: 'sky-news',
        name: 'Sky.com',
      },
      author: 'Sky',
      title:
        'What we know about the three-tier COVID-19 restrictions - Sky News',
      description: 'Test',
      url: 'https://news.sky.com/story/what-we-know-about-the-three-tier-covid-19-restrictions-12102221',
      urlToImage:
        'https://e3.365dm.com/20/09/1600x900/skynews-graphic-pub-curfew_5112627.jpg?20200929110143',
      publishedAt: '2020-10-12T03:11:15Z',
      content: null,
    };

    const news = new News(mockData);

    expect(news).to.be.an.instanceOf(News);
    expect(news.title).to.be.equal(mockData.title);
    expect(news.description).to.be.equal(mockData.description);
    expect(news.author).to.be.equal(mockData.author);
    expect(news.url).to.be.equal(mockData.url);
    expect(news.imageSrc).to.be.equal(mockData.urlToImage);
    expect(news.publishedAt).to.be.equal(mockData.publishedAt);
    expect(news.source).to.be.equal(mockData.source.name);
    expect(news.sourceId).to.be.equal(mockData.source.id);
  });
});
