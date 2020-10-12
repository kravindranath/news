let _get = require('lodash/get');

const stripHtmlRegex = /(<([^>]+)>)/gi;
const arrayMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
    let regionVal = region || 'gb';
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
        let pD = new Date(str);
        let day = pD.getDay();
        let monthIdx = pD.getMonth();
        let year = pD.getFullYear();
        let month = arrayMonths[monthIdx];

        dateLabel = `${day} ${month}, ${year}`;
    }
    return dateLabel;
}

/**
 * Get route params object from App
 * @param {Object} _this 
 */
function getRouteParams(_this) {
    let me = _this || {};
    let params = _get(me, 'props.match.params', {});
    return params;
}

module.exports = {
    getRouteParams: getRouteParams,
    getRegionVal: getRegionVal,
    setRegionVal: setRegionVal,
    formatDateShort: formatDateShort,
    stripTags: stripTags
};
