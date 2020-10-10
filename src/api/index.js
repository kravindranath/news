
const config = require('../config/default');
const { stripTags, getRegionVal } = require("../helpers");
const ROOT_PATH = 'https://newsapi.org/v2/';
const stripSpecialRegex = /\W+/gi;
const API_KEY = config.API_KEY;

const API_ENDPOINTS = {
    all : {
        path : ROOT_PATH,
        endpoint: 'everything'
    },
    top : {
        path : ROOT_PATH,
        endpoint: 'top-headlines'
    }
}

function getAPIConfig(_config){

    let config = _config || {};
    let baseConfig = API_ENDPOINTS[config.endpoint || 'all'] || {};
    
    baseConfig.params = config.params || {};

    return baseConfig;
}

function getAPIUrl(endpoint, params){

    let country = getRegionVal() || '';
    let q       = params.q || '';
    let paramsNew = {};

    if(params && params.country) {
        paramsNew.country = country; 
    }

    if(q) {
        paramsNew.q = q; 
    }

    paramsNew.apiKey = API_KEY; 

    let config = getAPIConfig({
        endpoint: endpoint,
        params: paramsNew
    });

    let path = `${config.path}${config.endpoint}`;
    let queryParams = Object.entries(config.params);
    var queryStr = '';

    queryParams.forEach((item) => {
        queryStr += `&${(item && item.join('='))}`
    });

    return `${path}?${queryStr.substr(1)}`;
}

function fetchData(_searchTerm){
    let me = this;
    let searchTerm = _searchTerm || '';
    let cleanSearch = stripTags(searchTerm);
    cleanSearch = cleanSearch.replace(stripSpecialRegex, '+');
    let api_all = getAPIUrl('all', {q: cleanSearch});
    let api_top = getAPIUrl('top', {country: 'gb'});
    let apiUrl = cleanSearch.length > 0 ? api_all : api_top;

    if(this.debTimer !== null){
        clearTimeout(this.debTimer);
    }

    this.debTimer = setTimeout(function(){
        fetch(apiUrl).then((res)=>{
            return res.json();
        }).then((data)=>{
            me.setState({
                articles: (data && data.articles) || []
            })
        })
    }, 1000);
}

module.exports = {
    fetchData    : fetchData,
    getAPIConfig : getAPIConfig,
    getAPIUrl    : getAPIUrl
}