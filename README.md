# node-version [![monorepo](https://img.shields.io/badge/---?label=monorepo&style=social&logo=github)](https://github.com/nodenv/actions)

[![Latest Release](https://img.shields.io/github/v/release/nodenv/actions-node-version?logo=github&sort=semver)](https://github.com/nodenv/actions-node-version/releases/latest)
[![Test](https://img.shields.io/github/workflow/status/nodenv/actions/Test?label=tests&logo=github)](https://github.com/nodenv/actions/actions?query=workflow%3ATest)
[![Examples](https://img.shields.io/github/workflow/status/nodenv/actions/Examples?color=orange&label=examples&logo=github)](https://github.com/nodenv/actions/actions?query=workflow%3AExamples)

## Usage

Determines node version via `nodenv local` and sets it as an output for use in subsequent steps.

```yml
steps:
  - id: nodenv
    uses: nodenv/actions/node-version@master
  - run: echo ${{ steps.nodenv.outputs.node-version }}
```

### usage with setup-node

Example demonstrating combined use with GitHub's own setup-node action:

```yml
steps:
  - uses: nodenv/actions/node-version@master
    id: nodenv
  - uses: actions/setup-node@v1
    with:
      node-version: '${{ steps.nodenv.outputs.node-version }}'
  - run: node -v
```

## Special Note

This action is maintained within the [nodenv/actions monorepo](https://github.com/nodenv/actions),
but released through its [own repository](https://github.com/nodenv/actions-node-version)
(in order to be listed in the GitHub Marketplace).
You may reference either one in your workflows:

```yml
# pulls from the monorepo
- uses: nodenv/actions/node-version@master

# pulls from the release repo
- uses: nodenv/actions-node-version@master
```

**Issues and Pull Requests should be opened in the [monorepo](https://github.com/nodenv/actions), please!**
