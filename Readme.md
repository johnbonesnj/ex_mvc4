# Express MongoDB Dust.js Seed


## How to use Express MongoDB Dust.js seed

Clone the ex_mvc4 repository, run `npm install && bower install` to grab the dependencies, and `grunt` to get it running.

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


## Contact

Express check out http://expressjs.com/

Dust check out http://linkedin.github.io/dustjs/

Mongoose check out http://mongoosejs.com

## License
MIT
