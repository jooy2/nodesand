import ora from 'ora';
import chalk from 'chalk';
import { performance } from 'perf_hooks';

import main from '../node/index.js';

const DIVIDER = '==================================================';

const { log, clear, error } = console;
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
    text: 'Main function is running...\n',
    spinner: 'dots',
  }).start();
  performance.now();
};

const done = () => {
  if (spinner.isSpinning) {
    stopSpinner();
    ora().succeed('Done!');
  }
  log(chalk.blue(DIVIDER));
  log(chalk.greenBright(`${performance.now()} ms`));
};

(async () => {
  try {
    await welcome();
    main(() => {
      done();
    });
  } catch (e) {
    stopSpinner();
    ora().fail('Failed!');
    error(e);
  }
})();
