const chalk = require('chalk');
// eslint-disable-next-line no-console
const logger = console.log;

const logError = msg => logger(chalk.redBright(msg));
const logInfo = msg => logger(chalk.blueBright(msg));
const logWarning = msg => logger(chalk.yellowBright(msg));

module.exports = {
  logError,
  logWarning,
  logInfo,
};
