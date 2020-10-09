
const API_KEY = '';
const ROOT_PATH = 'https://newsapi.org/v2/';

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
    let country = params.country || '';
    let q       = params.q || '';
    let paramsNew = {};

    if(country) {
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

//getAPIUrl('top-headlines', 'us', 'test')

module.exports = {
    getAPIConfig : getAPIConfig,
    getAPIUrl    : getAPIUrl
}