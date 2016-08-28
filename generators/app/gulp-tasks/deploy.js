/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

// Deploy to Google App Engine
// GAE requires Google Cloud SDK to be installed and configured.
// For info on SDK: https://cloud.google.com/sdk/

// Google App Engine project id
const projectID = "gae-starter-kit"

// Deploys to Google App Engine
function deploy() {
  // var deployCmd = 'appcfg.py -A gae-starter-kit update app.yaml'
  var deployCmd = 'gcloud app deploy app.yaml -q --project ' + projectID;
  return gulp.src('').pipe($.shell(deployCmd));
}

module.exports = {
  deploy: deploy
};