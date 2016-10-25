// See http://brunch.io for documentation.

let pkg = require("./package.json");

module.exports = {
    files: {
        javascripts: {joinTo: 'app.js' },
        stylesheets: { joinTo: 'app.css' }
    },
    paths: {
        public: "__tmp_build/public"
    },
    overrides: {
        production: {
            paths: {
                public: `release/public`
            }
        }
    }
};