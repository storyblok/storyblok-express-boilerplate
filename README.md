<p align="center">
  <h1 align="center">Node.js / Express boilerplate</h1>
  <p align="center">A <a href="https://www.storyblok.com" target="_blank">Node.js / Express</a> boilerplate which uses Storyblok as datasource for rendering components.</p>
</p>
<br>

[![GitHub release](https://img.shields.io/github/release/storyblok/storyblok-express-boilerplate.svg)](https://github.com/storyblok/storyblok-express-boilerplate/)

This boilerplate comes with a ready to use landing page using bootstrap as CSS framework. You can access the project on https://mysterious-tor-92558.herokuapp.com/.

![Editing in Storyblok](https://a.storyblok.com/f/40387/8fde812381/screeenvideo.gif)


## What is a boilerplate?
A boilerplate gives you a starting point for using Storyblok as API-based CMS for your next project.


## How to get started?

The most efficient way to start a Storyblok project would be with the [Command Line Interface](https://www.storyblok.com/docs/Guides/command-line-interface).

```
npm i storyblok -g
storyblok
```

and choose your boilerplate. You can of course simply `download` or `clone` this repository as well.

```
git clone https://github.com/storyblok/storyblok-express-boilerplate
```

After you cloned the repository execute following commands:

1. `npm install`
2. `gulp`
3. Make sure you have created a space on app.storyblok.com with the location pointing to `http://localhost:4301`.
4. To copy over the components this projects uses you can use following CLI command:
```
`storyblok push-components https://raw.githubusercontent.com/storyblok/storyblok-express-boilerplate/master/setup/components.js`
```


## Configuration

Get your private token from your space on https://app.storyblok.com and exchange it in the file `index.js`.

```
let Storyblok = new StoryblokClient({
  privateToken: 'YOUR_TOKEN'
});
```


## You want to know more about storyblok?

- [Prologue - Introduction](https://www.storyblok.com/docs/Prologue/Introduction)
- [Terminology - Introduction](https://www.storyblok.com/docs/terminology/introduction)
- [Content Delivery API - Introduction](https://www.storyblok.com/docs/Delivery-Api/introduction)


<br>
<br>
<p align="center">
<img src="https://a.storyblok.com/f/39898/1c9c224705/storyblok_black.svg" alt="Storyblok Logo">
</p>
