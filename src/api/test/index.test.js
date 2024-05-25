const mocha = require("mocha");
const chai = require("chai");

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

const api = require("../index");
const config = require("../../helpers");
const getAPIUrl = api.getAPIUrl;
const setRegionVal = config.setRegionVal;

console.log(config);

describe("API: ", function () {
  it("should create API Url for top-headlines", function () {
    setRegionVal();

    let mockOptions = { q: "", endpoint: "top-headlines", apiKey: "test" };
    let apiUrl = getAPIUrl(mockOptions);

    expect(apiUrl).to.be.equal(
      "https://newsapi.org/v2/top-headlines?country=gb&apiKey=test"
    );
  });

  it("should create API Url for everything", function () {
    let mockOptions = {
      q: "bitcoin price",
      endpoint: "everything",
      apiKey: "test",
    };
    let apiUrl = getAPIUrl(mockOptions);

    expect(apiUrl).to.be.equal(
      "https://newsapi.org/v2/everything?q=bitcoin+price&apiKey=test"
    );
  });

  it("should create API Url for sources", function () {
    let mockOptions = { endpoint: "sources", apiKey: "test" };
    let apiUrl = getAPIUrl(mockOptions);

    expect(apiUrl).to.be.equal("https://newsapi.org/v2/sources?apiKey=test");
  });

  it("should create API Url for top-headlines from sources", function () {
    let mockOptions = {
      sourceId: "bbc-news",
      endpoint: "top-headlines",
      apiKey: "test",
    };
    let apiUrl = getAPIUrl(mockOptions);

    expect(apiUrl).to.be.equal(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=test"
    );
  });
});
