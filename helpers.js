// Handlebar helpers

module.exports = {
  // a iterate over a specific portion of a list.
  // usage: {{#slice items offset="1" limit="5"}}{{name}}{{/slice}} : items 1 thru 6
  // usage: {{#slice items limit="10"}}{{name}}{{/slice}} : items 0 thru 9
  // usage: {{#slice items offset="3"}}{{name}}{{/slice}} : items 3 thru context.length
  slice: function(context, block) {
    var ret = '';
    var offset = parseInt(block.hash.offset) || 0;
    var limit = parseInt(block.hash.limit) || 5;

    if (offset >= context.length) {
      return ret;
    }

    var j = ((limit + offset) < context.length) ? (limit + offset) : context.length;

    for(offset,j; offset<j; offset++) {
      ret += block.fn(context[offset]);
    }

    return ret;
  }
}