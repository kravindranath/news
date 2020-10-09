const stripHtmlRegex = /(<([^>]+)>)/gi;
const arrayMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

function stripTags(str){
    if(!str) return '';
    return str.replace(stripHtmlRegex, '');
}

function getRegionVal(){
    let regionVal = 'us';
    if(localStorage) {
        regionVal = localStorage.getItem('locale');
    }
    return regionVal;
}

function setRegionVal(region){
    let regionVal = region || 'us';
    if(localStorage) {
        localStorage.setItem('locale', regionVal);
    }
}

function formatDateShort(str){
    let dateLabel = '';
    if(str) {
        let pD = new Date(str);
        let day = pD.getDay();
        let monthIdx = pD.getMonth();
        let year = pD.getFullYear();
        let month = arrayMonths[monthIdx];

        dateLabel = `${day} ${month}, ${year}`;
    }
    return dateLabel;
}

module.exports = {
    getRegionVal    : getRegionVal,
    setRegionVal    : setRegionVal,
    formatDateShort : formatDateShort,
    stripTags       : stripTags
};
