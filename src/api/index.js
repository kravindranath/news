
const config = require('../config/default');
const { stripTags, getRegionVal } = require("../helpers");
const ROOT_PATH = 'https://newsapi.org/v2/';
const stripSpecialRegex = /\W+/gi;
const API_KEY = config.API_KEY;

function getAPIUrl(params){

    let country = getRegionVal() || '';
    let q       = params.q || '';
    let paramsNew = {};
    let API_NAME = params.endpoint || 'top-headlines';
    let addCountryParam = ((API_NAME === 'top-headlines') && !(params.sourceId))

    if(addCountryParam) {
        paramsNew.country = country; 
    }

    if(params && params.sourceId) {
        paramsNew.sources = params.sourceId;
    }

    if(q && q.length > 0) {
        paramsNew.q = q; 
    }

    paramsNew.apiKey = API_KEY;
    
    let path = `${ROOT_PATH}${API_NAME}`;
    let queryParams = Object.entries(paramsNew);
    var queryStr = '';

    queryParams.forEach((item) => {
        queryStr += `&${(item && item.join('='))}`
    });

    return `${path}?${queryStr.substr(1)}`;
}

function fetchData(_options){
    let me = this;
    let options = _options || '';
    let { endpoint, sourceId, q } = { ...options };

    let cleanSearch = stripTags(q);
    cleanSearch = cleanSearch.replace(stripSpecialRegex, '+');
    let apiUrl = getAPIUrl({q: cleanSearch, sourceId: sourceId, endpoint: endpoint });

    if(this.debTimer !== null){
        clearTimeout(this.debTimer);
    }

    this.debTimer = setTimeout(function(){
        fetch(apiUrl).then((res)=>{
            return res.json();
        }).then((data)=>{
            me.setState({
                data: data || []
            })
        });
    }, 1000);
    
}

module.exports = {
    fetchData    : fetchData,
    getAPIUrl    : getAPIUrl
}