const config = require('../config/default');
const { stripTags, getRegionVal } = require('../helpers');

const ROOT_PATH = 'https://newsapi.org/v2/';
const stripSpecialRegex = /\W+/gi;
const { API_KEY } = config;

/**
 * Create API URL from Options passed as params
 * @param {Object} params params country, sourceId etc
 */
function getAPIUrl(params) {
  const country = getRegionVal() || '';
  const q = params.q || '';
  const paramsNew = {};
  const API_NAME = params.endpoint || 'top-headlines';
  const addCountryParam = API_NAME === 'top-headlines' && !params.sourceId;

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

  const path = `${ROOT_PATH}${API_NAME}`;
  const queryParams = Object.entries(paramsNew);
  let queryStr = '';

  queryParams.forEach((item) => {
    queryStr += `&${item && item.join('=')}`;
  });

  return `${path}?${queryStr.substr(1)}`;
}

/**
 * Fetch data and push back into state
 * @param {Object} _options Options to create API path
 */
function fetchData(_options) {
  const me = this;
  const options = _options || '';
  const { endpoint, sourceId, q } = { ...options };

  const cleanSearch = stripTags(q);
  const apiUrl = getAPIUrl({
    q: cleanSearch,
    sourceId,
    endpoint,
  });

  if (me.debTimer !== null) {
    clearTimeout(me.debTimer);
  }

  me.debTimer = setTimeout(function () {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        me.setState({
          data: data || [],
        });
      });
  }, 1000);
}

module.exports = {
  fetchData,
  getAPIUrl,
};
