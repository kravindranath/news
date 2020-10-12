let _get = require('lodash/get');

const stripHtmlRegex = /(<([^>]+)>)/gi;
const arrayMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function stripTags(str) {
    if (!str) return '';
    return str.replace(stripHtmlRegex, '');
}

function getRegionVal() {
    let regionVal = 'gb';
    if (localStorage) {
        regionVal = localStorage.getItem('locale');
    }
    return regionVal;
}

function setRegionVal(region) {
    let regionVal = region || 'gb';
    if (localStorage) {
        localStorage.setItem('locale', regionVal);
    }
}

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
