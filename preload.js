const chalk = require('chalk');
const ora = require('ora');
const { performance } = require('perf_hooks');
const main = require('./src/index.js');

const { log, clear, error } = console;

let spinner;
const divider = '==================================================';

const stopSpinner = () => {
  log('');
  spinner.stop();
};

const welcome = async () => {
  clear();
  log(chalk.yellow(new Date()));
  log(chalk.blue(divider));
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
  log(chalk.blue(divider));
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
