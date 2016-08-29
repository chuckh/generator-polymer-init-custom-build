# generator-polymer-init-custom-build-gae

[![Build Status](https://travis-ci.org/chuckh/generator-polymer-init-custom-build-gae.svg?branch=master)](https://travis-ci.org/chuckh/generator-polymer-init-custom-build-gae)

This template is a starting point for building apps using Polymer Starter Kit
with a custom gulp process leveraging
[polymer-build](https://github.com/Polymer/polymer-build), the library
powering [Polymer CLI](https://github.com/Polymer/polymer-cli) and deploying to Google App Engine.

### Setup

##### Prerequisites

First, install
[Polymer CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli)
and generator-polymer-init-custom-build-gae using
[npm](https://www.npmjs.com/)
(we assume you have pre-installed [node.js](https://nodejs.org/)).

    npm install -g polymer-cli
    npm install -g generator-polymer-init-custom-build-gae

##### Initialize project from template

Generate your new project using `polymer init`:

    mkdir my-app
    cd my-app
    polymer init custom-build-gae

##### Google App Engine

1. Download the [Google App Engine SDK](https://cloud.google.com/appengine/downloads) and follow the instructions for your platform to install it.

2. [Sign up for an AppEngine account.](https://cloud.google.com/appengine)

3. [Open the project dashboard](https://console.cloud.google.com/iam-admin/projects) and create a new project.
  - Click the Create Project button.
  - Type a project name.
  - Click the Create button.


4. Change `gae-starter-kit` in app.yaml `application: gae-starter-kit` to your Google App Engine project name.

5. Change `gae-starter-kit` in gulp-tasks/deploy.js `projectID = "gae-starter-kit"` to your Google App Engine project name.

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open

### Build

Rather than rely on the usual `polymer build` command, this project gives you
an "escape hatch" so you can include additional steps in your build process.

The included `gulpfile.js` relies on
[the `polymer-build` library](https://github.com/Polymer/polymer-build),
the same library that powers Polymer CLI. Out of the box it will clean the
`build` directory, and provide image minification. Follow the comments in the
`gulpfile.js` to add additional steps like JS transpilers or CSS preprocessors.

    gulp

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/bundled

### Run tests

This command will run
[Web Component Tester](https://github.com/Polymer/web-component-tester) against
the browsers currently installed on your machine:

    polymer test

### Adding a new build step

The gulpfile already contains an example build step that demonstrates how to
run image minification across your source files. For more examples, refer to
the section in
[the polymer-build README on extracting inline sources](https://github.com/Polymer/polymer-build#extracting-inlined-cssjs).

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections
of the application.  Each new demand-loaded fragment should be added to the
list of `fragments` in the included `polymer.json` file.  This will ensure
those components and their dependencies are added to the list of pre-cached
components (and will have bundles created in the fallback `bundled` build).

### Deploy to Google App Engine

You can test first, then build and deploy.  Gulp task `gulp deploy` first builds then deploys to Google App Engine.

    polymer test
    gulp deploy


### To update the `generator-polymer-init-custom-build-gae` template do the following.

    npm update -g generator-polymer-init-custom-build-gae


### Demo of this template:

[gae-starter-kit.appspot.com](https://gae-starter-kit.appspot.com/)
---

## License

The Polymer project uses a BSD-like license available [here](./LICENSE.txt)
