const exec = require('util').promisify(require('child_process').exec)
const core = require('@actions/core')

const setupNodenv = require('../setup-nodenv')

function run () {
  return setupNodenv
    .then(() => exec('nodenv local'))
    .then(cmd => core.setOutput('node-version', cmd.stdout.trim()))
    .catch(err => core.setFailed(err.message))
}

module.exports = run()
