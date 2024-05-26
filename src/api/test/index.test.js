const mocha = require('mocha');
const chai = require('chai');

const { describe } = mocha;
const { it } = mocha;
const { expect } = chai;

const api = require('../index');
const config = require('../../helpers');

const { getAPIUrl } = api;
const { setRegionVal } = config;

console.log(config);

describe('API: ', function () {
  it('should create API Url for top-headlines', function () {
    setRegionVal();

    const mockOptions = { q: '', endpoint: 'top-headlines', apiKey: 'test' };
    const apiUrl = getAPIUrl(mockOptions);

    expect(apiUrl).to.be.equal(
      'https://newsapi.org/v2/top-headlines?country=gb&apiKey=test',
    );
  });

  it('should create API Url for everything', function () {
    const mockOptions = {
      q: 'bitcoin price',
      endpoint: 'everything',
      apiKey: 'test',
    };
    const apiUrl = getAPIUrl(mockOptions);

    expect(apiUrl).to.be.equal(
      'https://newsapi.org/v2/everything?q=bitcoin+price&apiKey=test',
    );
  });

  it('should create API Url for sources', function () {
    const mockOptions = { endpoint: 'sources', apiKey: 'test' };
    const apiUrl = getAPIUrl(mockOptions);

    expect(apiUrl).to.be.equal('https://newsapi.org/v2/sources?apiKey=test');
  });

  it('should create API Url for top-headlines from sources', function () {
    const mockOptions = {
      sourceId: 'bbc-news',
      endpoint: 'top-headlines',
      apiKey: 'test',
    };
    const apiUrl = getAPIUrl(mockOptions);

    expect(apiUrl).to.be.equal(
      'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=test',
    );
  });
});
