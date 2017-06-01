'use strict';

const marked = require('marked');

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
  },

  asset: function(content) {
    return '/' + content;
  },

  markdown: function(content) {
    return marked(content);
  },

  img: function(content, block) {
    var size = block.hash.size;
    if (!content) {
      return  ''
    }
    var img = content.replace('//a.storyblok.com', '');
    img = '//img2.storyblok.com' + (size ? '/' + size : '') + img;
    return img;
  },

  ifEquals: function(v1, v2, block) {
    if(v1 === v2) {
      return block.fn(this);
    }
    return block.inverse(this);
  }
}