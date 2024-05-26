const { stripTags } = require('../helpers');

/**
 * Create Source constructor
 * @param {Object} _item data from API
 * @returns {Object}
 */
function Source(_item) {
  const item = _item || {};
  const { id, category, description, name } = { ...item };

  this.id = id;
  this.description = stripTags(description);
  this.category = category;
  this.name = name;

  return this;
}

module.exports = Source;
