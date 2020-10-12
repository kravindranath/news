const mocha = require('mocha');
const chai = require('chai');

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

const { stripTags, formatDateShort, getRouteParams } = require('../index');

describe('Helpers: ', function(){

    it('stripTags: should strip HTML tags', function(){

        let str = '<p>Test String! <em>works</em></p>';
        let res = stripTags(str);

        expect(res).to.be.equal('Test String! works');
    });
    
    it('formatDateShort: should format date in dd Mon, YYYY', function(){
        let str = '2020-10-12T02:30:00Z';
        let res = formatDateShort(str);

        expect(res).to.be.equal('1 Oct, 2020');
    });

    it('getRouteParams: should get params object', function(){
        let params =  {
            props: {
                match: {
                    params: {
                        id: 'bbc-news'
                    }
                }
            }
        };
        let res = getRouteParams(params);
        
        expect(res).to.be.an('object');
        expect(res.id).to.be.equal('bbc-news');

    });
});