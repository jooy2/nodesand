import { Bench } from 'tinybench';
import ora from 'ora';
import chalk from 'chalk';
import { performance } from 'perf_hooks';
import defineBenchmarks, { benchConfiguration } from '../bench/index.js';

const DIVIDER = '='.repeat(process.stdout.columns);

const { log, clear, error, table } = console;
let spinner;

const stopSpinner = () => {
  log('');
  spinner.stop();
};

const welcome = async () => {
  clear();
  log(chalk.yellow(new Date()));
  log(chalk.blue(DIVIDER));
  spinner = ora({
    text: 'Benchmark is running...\n',
    spinner: 'dots'
  }).start();
  performance.now();
};

const done = (bench) => {
  if (spinner.isSpinning) {
    stopSpinner();
    ora().succeed('Done!');
  }
  log(chalk.blue(DIVIDER));
  log(`${bench.name}: `);
  log(chalk.greenBright(`${performance.now()} ms`));
};

const bench = new Bench(benchConfiguration);

(async () => {
  try {
    await welcome();

    defineBenchmarks(bench);

    await bench.run();

    done(bench);

    // Higher `Samples` values result in faster operation.
    table(bench.table());
  } catch (e) {
    stopSpinner();
    ora().fail('Failed!');
    error(e);
  }
})();
