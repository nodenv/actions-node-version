# node-version

## Usage

Determines node version via `nodenv local` and sets it as an output for use in subsequent steps.

```yml
steps:
  - uses: nodenv/actions/node-version
```

### usage with setup-node

Example demonstrating combined use with GitHub's own setup-node action:

```yml
steps:
  - uses: nodenv/actions/node-version
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
- uses: nodenv/actions/node-version

# pulls from the release repo
- uses: nodenv/actions-node-version
```
