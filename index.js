const exec = require('util').promisify(require('child_process').exec)
const core = require('@actions/core')

const { installNodenv } = require('../src/installer')

async function run () {
  return Promise.resolve()
    .then(() => installNodenv(core.getInput('nodenv-version')))
    .then(() => exec('nodenv local'))
    .then(cmd => core.setOutput('node-version', cmd.stdout.trim()))
    .catch(error => core.setFailed(error.message))
}

run()
