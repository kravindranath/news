const mocha = require('mocha');
const chai = require('chai');

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

const Source = require('../Source');

describe('Entity Source: ', function () {

    it('should create with all props', function () {

        let mockData = {
            'id': 'abc - news',
            'name': 'ABC News',
            'description': 'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
            'url': 'https://abcnews.go.com',
            'category': 'general',
            'language': 'en',
            'country': 'us'
        };

        let source = new Source(mockData);

        expect(source).to.be.an.instanceOf(Source);
        expect(source.id).to.be.equal(mockData.id);
        expect(source.description).to.be.equal(mockData.description);
        expect(source.category).to.be.equal(mockData.category);
        expect(source.name).to.be.equal(mockData.name);
    });

});