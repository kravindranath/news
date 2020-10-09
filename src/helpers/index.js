const stripHtmlRegex = /(<([^>]+)>)/gi;
const arrayMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

function stripTags(str){
    if(!str) return '';
    return str.replace(stripHtmlRegex, '');
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
    formatDateShort : formatDateShort,
    stripTags : stripTags
};
