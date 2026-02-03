# 🔭 NodeSand

**NodeSand** is a powerful CLI utility tool that provides various tools for experimenting with simple code or benchmarking in a Node.js environment.

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

- Serve static HTML file
- Code benchmarking
- TypeScript support
- ESLint & Prettier support
- Observation mode
- Execution time report

## Installation

We recommend using Node.js version 20 or higher to use NodeSand.

```shell
$ npm init nodesand
```

## Usage

Before you begin, you need to install the dependent packages.

```shell
$ npm i
# or...
$ pnpm i
```

### Run node script

Source files of node scripts (dev, once, watch) are located in `src/node/index.js`. When all the actions are done, we call `next()` to end execution.

Run the script at once with the following command:

```shell
$ npm run once
or
$ npm run dev
```

Run whenever the script file changes with the following command:

```shell
$ npm run watch
```

### Benchmarking

You can run benchmarks using various code comparison sets in Node.js. (We use [Tinybench](https://github.com/tinylibs/tinybench) for benchmarking.)

Write the code in `src/bench/index.js` as follows:

```javascript
export const benchConfiguration = { name: 'Benchmark', time: 100 };

export default function defineBenchmarks(bench) {
  bench
    .add('faster task', () => {
      console.log('I am faster');
    })
    .add('slower task', async () => {
      await new Promise((resolve) => setTimeout(resolve, 1)); // we wait 1ms :)
      console.log('I am slower');
    });
}
```

Then simply run the following command:

```shell
$ npm run bench
```

Then the benchmarking results will be displayed as shown in the example below.

```shell
✔ Done!
===========================================
Benchmark:
791.840458 ms
┌─────────┬───────────────┬───────────────────┬────────────────────┬────────────────────────┬────────────────────────┬─────────┐
│ (index) │ Task name     │ Latency avg (ns)  │ Latency med (ns)   │ Throughput avg (ops/s) │ Throughput med (ops/s) │ Samples │
├─────────┼───────────────┼───────────────────┼────────────────────┼────────────────────────┼────────────────────────┼─────────┤
│ 0       │ 'faster task' │ '3861.8 ± 2.74%'  │ '3500.0 ± 166.00'  │ '277861 ± 0.12%'       │ '285714 ± 12937'       │ 25895   │
│ 1       │ 'slower task' │ '1147313 ± 3.46%' │ '1174041 ± 9520.5' │ '1642 ± 66.76%'        │ '852 ± 7'              │ 88      │
└─────────┴───────────────┴───────────────────┴────────────────────┴────────────────────────┴────────────────────────┴─────────┘
```


### Static HTML serve

Changes in HTML files as well as node scripts can be displayed immediately in a web browser.

Source files of HTML files are located in `src/www/index.html`.

To serve a static HTML file, run the following command:

```shell
$ npm run serve
or
$ npm run www
```

Now you can try opening the HTML file with `http://localhost:3000`. Any changes will be updated immediately. (requires refresh)

### Quickly restart the task

Use the command below to quickly reset the code to its initial state:

```shell
# Code reset
$ npm run reset
# Additionally, initialize `package.json` and reset the modules.
$ npm run reset:all
```

## Contributing

Anyone can contribute to the project by reporting new issues or submitting a pull request. For more information, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Please see the [LICENSE](LICENSE) file for more information about project owners, usage rights, and more.

