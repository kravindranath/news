
const config = require('../config/default');
const { stripTags, getRegionVal } = require('../helpers');

const ROOT_PATH = 'https://newsapi.org/v2/';
const stripSpecialRegex = /\W+/gi;
const API_KEY = config.API_KEY;

/**
 * Create API URL from Options passed as params 
 * @param {Object} params params country, sourceId etc
 */
function getAPIUrl(params) {

    let country = getRegionVal() || '';
    let q = params.q || '';
    let paramsNew = {};
    let API_NAME = params.endpoint || 'top-headlines';
    let addCountryParam = ((API_NAME === 'top-headlines') && !(params.sourceId));

    if (addCountryParam) {
        paramsNew.country = country;
    }

    if (params && params.sourceId) {
        paramsNew.sources = params.sourceId;
    }

    if (q && q.length > 0) {
        paramsNew.q = q.replace(stripSpecialRegex, '+');
    }

    paramsNew.apiKey = params.apiKey || API_KEY;

    let path = `${ROOT_PATH}${API_NAME}`;
    let queryParams = Object.entries(paramsNew);
    let queryStr = '';

    queryParams.forEach((item) => {
        queryStr += `&${(item && item.join('='))}`;
    });

    return `${path}?${queryStr.substr(1)}`;
}

/**
 * Fetch data and push back into state
 * @param {Object} _options Options to create API path
 */
function fetchData(_options) {
    let me = this;
    let options = _options || '';
    let { endpoint, sourceId, q } = { ...options };

    let cleanSearch = stripTags(q);
    let apiUrl = getAPIUrl({ q: cleanSearch, sourceId: sourceId, endpoint: endpoint });

    if (me.debTimer !== null) {
        clearTimeout(me.debTimer);
    }

    me.debTimer = setTimeout(function () {
        fetch(apiUrl).then((res) => {
            return res.json();
        }).then((data) => {
            me.setState({
                data: data || []
            });
        });
    }, 1000);

}

module.exports = {
    fetchData: fetchData,
    getAPIUrl: getAPIUrl
};