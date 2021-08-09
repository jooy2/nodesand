# 🔭 Quick Node Tester
Quick Node Tester provides a template to run or test simple Node.js scripts. (Require Node 12 or higher)

## Features
- ESLint (airbnb-base)
- Observation mode
- Execution time report

## Usage
Before you begin, you need to install the dependent packages.
```shell
$ npm i
```

The test code is written inside the main function of ```src/index.js```. When all the actions are done, we call next() to end execution.

To simply run the script once with the dev command:
```shell
$ npm run dev
```

Run the script once with the following command:
```shell
$ npm run once
```

Run whenever the script file changes with the following command (Watch)
```shell
$ npm run watch 
```

## Licsense
Copyright © 2021 Jooy2 Released under the MIT license.
