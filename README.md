# Abledev CLI

## Setup

1. Install dependencies: `yarn`
2. Run tests or test a specific command by calling them with
   `yarn abledev [command] [arguments]`.

## Commands

### `abledev new <componentName>`

This creates a new isolated component folder. To test it against an existing
folder:

- Use `yarn abledev new ComponentName --override` to test it against a folder
  inside `abledev-cli`. You'd have to add it to `.gitignore` if you do this.
- Or use `yarn abledev new ../ComponentName --override --path ComponentName` to
  use another folder outside `abledev-cli`. You don't need to ignore an
  additional folder if you do this, and because there's no nested `package.json`
  files, this would be more realistic.

> `override` ignores an existing folder in the path location, so this can be
> used many times to test something. If `override` is not added, we will error.

### `abledev start`

It basically runs `ts-node ./abledev/devServer.ts` from an isolated component.
It will probably do more in the future but for now, this is enoguh.
