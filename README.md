# 🔭 NodeSand

Quick Node.js Sandbox provides a template to run or test simple Node.js scripts. (Require Node 18 or higher)

```shell
Tue Jan 31 2023 09:03:30 GMT+0900 (Korean Standard Time)
==================================================
⠋ Main function is running...
Hello, World!
✔ Done!
==================================================
50.02708297967911 ms
```

## Features

- Serve static html file
- ESLint support
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

## Contributing

Anyone can contribute to the project by reporting new issues or submitting a pull request. For more information, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Please see the [LICENSE](LICENSE) file for more information about project owners, usage rights, and more.

