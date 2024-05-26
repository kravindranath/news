const _get = require('lodash/get');

const stripHtmlRegex = /(<([^>]+)>)/gi;
const arrayMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * Simple function to strip HTML tags from a string
 * @param {String} str Input string
 */
function stripTags(str) {
  if (!str) return '';
  return str.replace(stripHtmlRegex, '');
}

/**
 * Get region value from localStorage
 */
function getRegionVal() {
  let regionVal = 'gb';
  if (localStorage) {
    regionVal = localStorage.getItem('locale');
  }
  return regionVal;
}

/**
 * Set region value in localStorage
 */
function setRegionVal(region) {
  const regionVal = region || 'gb';
  if (localStorage) {
    localStorage.setItem('locale', regionVal);
  }
}

/**
 * Convert date string to readable format DD Mon, YYYY
 * @param {String} str Input date as string
 */
function formatDateShort(str) {
  let dateLabel = '';
  if (str) {
    const pD = new Date(str);
    const day = pD.getDay();
    const monthIdx = pD.getMonth();
    const year = pD.getFullYear();
    const month = arrayMonths[monthIdx];

    dateLabel = `${day} ${month}, ${year}`;
  }
  return dateLabel;
}

/**
 * Get route params object from App
 * @param {Object} _this
 */
function getRouteParams(_this) {
  const me = _this || {};
  const params = _get(me, 'props.match.params', {});
  return params;
}

module.exports = {
  getRouteParams,
  getRegionVal,
  setRegionVal,
  formatDateShort,
  stripTags,
};
