# Express MongoDB Dust.js Seed

Start an awesome app with AngularJS on the front, Express + Node on the back. This project is an
application skeleton for a typical [AngularJS](http://angularjs.org/) web app for those who want
to use Node to serve their app.

The seed contains angular libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball) and
you're ready to develop your application.

The seed app shows how to wire together Angular client-side components with Express on the server.
It also illustrates writing angular partials/views with the Jade templating library.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing
server and browser templating will convolute your app. Instead, use Jade as a syntactic sugar for
HTML, and let AngularJS take care of interpolation on the browser side._

## How to use angular-express-seed

Clone the ex_mvc4 repository, run `npm install` to grab the dependencies, and `grunt` to get it running.

### Running the app

Runs like a typical express app:
`node app.js`

### Running tests

Nothing yet, sorry. Feel free to fork it and add them yourself.

## Directory Layout
    app/
      controllers/      --> controller files
        home.js         --> main controller
      models/           --> model files
        article.js      --> example model
      views/
        home/           --> folder to correspond to controller
          index.dust    --> main page for app
        404.dust        --> error page
        layout.dust     --> main layout which wraps all other views
        navbar.dust     --> bootstrap navbar with dust code for active pages
    config/             --> config files
      config.js         --> basic config, environment setup
      express.js        --> Express 4 dependencies and config
      routes.js         --> routes for app, map routes to controllers
    public/             --> static files
      components/       --> bower components (after you run `bower install`)
      css/              --> css files
        main.css        --> default stylesheet
      img/              --> image files (favicon)
      js/               --> javascript files

    .bowerrc            --> Bower config
    .gitignore          --> Git ignore file
    .npmignore          --> NPM ignore file
    app.js              --> main express app
    bower.json          --> Bower dependencies
    Gruntfile.js        --> Grunt config for running app with livereload
    package.json        --> config and dependencies
    Readme.md           --> what you are currently reading


## Example App

A simple [blog](https://github.com/btford/angular-express-blog) based on this seed.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Jade, http://expressjs.com/ and http://jade-lang.com/ are
your friends.

## License
MIT
