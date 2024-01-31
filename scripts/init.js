/*** system modules ***/
const fs = require('fs');
const chalk = require('chalk');
const { exec } = require('child_process');
const readline = require('readline-sync');

/*** own modules ***/
const { navigationPreparations } = require('./navigation');
const { logInfo, logError } = require('./helpers');

const { appName, bundleName, name } = JSON.parse(
  fs.readFileSync('package.json', 'utf8'),
);
const defBundleName = 'com.' + name.toLowerCase();
const resultBundleName = bundleName ?? defBundleName;
const execCommand = `react-native-rename "${appName}" --skipGitStatusCheck -b ${resultBundleName}`;

//TODO add some more things that needs native files interruption

const quizOptions = [
  {
    question: `Should we use react-native-navigation? y or n options `,
    yesAnswer: 'y',
    noAnswer: 'n',
    yesCallback: onSuccess =>
      navigationPreparations(resultBundleName, onSuccess),
    noLog: 'Well, up to you',
    errorLog: 'Answer is not something expected, use y or n',
  },
];

const ask = async ({
  question,
  yesAnswer,
  noAnswer,
  yesCallback,
  noLog,
  errorLog,
}) => {
  return new Promise(resolve => {
    const answer = readline.question(chalk.greenBright(question));
    if (answer === yesAnswer) {
      yesCallback?.(resolve);
      return;
    } else if (answer === noAnswer) {
      logInfo(noLog);
    } else {
      throw new Error(errorLog);
    }
    resolve(true);
  });
};

const initQuiz = async (index = 0) => {
  for (let i = index; i < quizOptions.length; i++) {
    try {
      await ask(quizOptions[i]);
    } catch (e) {
      logError(e);
      await initQuiz(i);
    }
  }
};

// in case if the appName param withing package json is not equal to initially predefined
// app will be renamed accordingly with react-native-rename package

if (name && appName && appName !== name) {
  logInfo('App rename started');
  const command = exec(execCommand);
  command.on('exit', initQuiz);
} else {
  initQuiz().catch();
}
