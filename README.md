# 🔭 NodeSand

Quick NodeJS Sandbox provides a template to run or test simple Node.js scripts. (Require Node 14 or higher)

## Features

- Serve static html file
- ESLint (airbnb-base) support
- Observation mode
- Execution time report

## Installation

```shell
$ npm init nodesand
```

## Usage

Before you begin, you need to install the dependent packages.

```shell
$ npm i
```

### Run node script

Source files of node scripts (dev, once, watch) are located in `src/node/index.js`. When all the actions are done, we call `next()` to end execution.

Run the script once with the following command:

```shell
$ npm run once
or
$ npm run dev
```

Run whenever the script file changes with the following command:

```shell
$ npm run watch
```

### Static html serve

Changes in html files as well as node scripts can be displayed immediately in a web browser.

Source files of html files are located in `src/www/index.html`.

To serve a static html file, run the following command:

```shell
$ npm run serve
or
$ npm run www
```

Now you can try opening the html file with `http://localhost:3000`. Any changes will be updated immediately. (requires refresh)

## License

Copyright © 2021-2022 [Jooy2](https://jooy2.com) <[jooy.contact@gmail.com](mailto:jooy.contact@gmail.com)> Released under the MIT license.

