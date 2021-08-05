# webcomponents-react-integrate

This repo shows a dropdown and a table, where data in table is sorted depending upon dropdown selection.

Dropdown is a webcomponent, published on npm as- "webcomponents-package" which can take below props

| Argument name  | Type   | Default    | Description                                                                |
| -------------- | ------ | ---------- | -------------------------------------------------------------------------- |
| reset-value    | bool   | false      | If rseset button clicked, it can set dropdown options to select 1st option |
| selected-value | string | 'Distance' | Selected value from options                                                |
| data           | array  | false      | List of items(string) to be shown in dropdown                              |

## Usage

This project depends on React. To start with, use below commands-

```
npm run install
```

or

```
yarn
```

To run the project locally-

```
npm start
```

## About 'webcomponents-package' package

- Created using WebComponents and Stencils

## Usage of 'webcomponents-package'

```
<dropdown-integrated-component
  reset-value={false}
  selected-value="Distance"
  data={list}
  ></dropdown-integrated-component>
  ````


