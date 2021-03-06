let stripTags = require('../helpers').stripTags;

/**
 * Create Source constructor
 * @param {Object} _item data from API
 * @returns {Object}
 */
function Source(_item) {
    let item = _item || {};
    let { id, category, description, name } = { ...item };

    this.id = id;
    this.description = stripTags(description);
    this.category = category;
    this.name = name;

    return this;
}

module.exports = Source;