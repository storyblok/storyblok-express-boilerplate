'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const url = require('url');
const helpers = require('./helpers');
const compression = require('compression');
const minifyHTML = require('express-minify-html');

// 1. Require the Storyblok node client
const StoryblokClient = require('storyblok-node-client');

// 2. Initialize the client with the private key 
// from your space dashboard at https://app.storyblok.com
let Storyblok = new StoryblokClient({
  privateToken: 'eRJlazIzZ47h1Q3mTr4Vygtt',
  cache: {
    type: 'memory'
  }
});

app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
      removeComments:            false,
      collapseWhitespace:        true,
      collapseBooleanAttributes: false,
      removeAttributeQuotes:     false,
      removeEmptyAttributes:     false,
      minifyJS:                  false
    }
}));

app.use(compression());

const oneYear = 1 * 365 * 24 * 60 * 60 * 1000;
app.use('/public', express.static('public', { maxAge: oneYear }));

// 3. Define a clear cache route for the publishing hook.
app.get('/clear_cache', function(req, res) {
  Storyblok.flushCache();
  res.send('Cache flushed!');
});

// 4. Define a wildcart route for getting other stories from their slug
app.get('/*', function(req, res) {
  var path = url.parse(req.url).pathname;
  path = path == '/' ? 'home' : path;

  Storyblok
    .get(`stories/${path}`, {
      version: req.query._storyblok ? 'draft': 'published'
    })
    .then((response) => {
      res.render('index', {
        story: response.body.story
      });
    })
    .catch((error) => {
      if (error.statusCode == 404) {
        res.status(404)
           .send('Not found');
      } else {
        console.log(error);
        res.send('An ' + error.statusCode.toString() + ' error ocurred. Please take a look at your error log.');
      }
    });
});

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: 'views/components/',
  helpers: helpers
}));

app.set('view engine', '.hbs');
app.set('views', 'views')

app.listen(process.env.PORT || 4300, function() {
  console.log('Example app listening on port 4300!');
});
