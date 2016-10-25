# Ordamo V3 SDK demo app

A demo application that uses the `ordamo-v3-sdk` package. It demonstrates key featues of the
SDK and contains a configured development environment with scripts for running release builds,
unit tests and a local development server with live reloading.

To view the documentation, run `npm start` from the same folder as this file and go to
[http://localhost:9966/] in your browser.

Run `npm run release` to create a new release build.

## Creating new SDK apps

This project can be used as a template for new Ordamo V3 apps. Copy the folder, then:

1. Edit package.json:
    * alter the package name and version to be appropriate for your app
    * Remove the `"repository"` field and add `"private": true` to prevent the app being
      published to NPM
    * remove packages that you don't intend to use from the dependencies in package.json
2. Edit LICENSE.txt to have correct copyright and license information
3. Edit README.md (this file!) to remove these instructions and insert a description of your app.
4. Delete ordamo-v3-sdk-demo-app release files from the `releases/` folder.
4. Delete the `.git` folder, which contains the demo app history and use `git init` to create your
   own new repo. Or, if you already have a repo, then just copy the files over to it making sure
   to include the hidden `.gitignore` file but not the `.git` folder.
