/*** system modules ***/
const {resolve} = require('path');
const fs = require('fs');

/*** own modules ***/

const {logInfo} = require('helpers');
const navigationPreparations = (resultBundleName, callback) => {
  const bundlePath = resultBundleName.replace('com.', '').split('.').join('/');
  const mainActivityPath = resolve(
    `android/app/src/main/java/com/${bundlePath}/MainActivity.kt`,
  );
  const reactNativeNavigationBundle = 'import android.os.Bundle;';
  const reactNativeNavigationOnCreate = `
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
`;

  fs.readFile(mainActivityPath, 'utf-8', (err, str) => {
    let data = str;
    if (err) {
      throw err;
    }

    if (!data.match(reactNativeNavigationBundle)) {
      data = data.replace(
        `${resultBundleName}`,
        `${resultBundleName}\n${reactNativeNavigationBundle}`,
      );
    }

    if (!data.match(reactNativeNavigationOnCreate.trim())) {
      data = data.replace(
        'class MainActivity : ReactActivity() {',
        `class MainActivity: ReactActivity() {\n${reactNativeNavigationOnCreate}`,
      );
    }

    fs.writeFile(mainActivityPath, data, 'utf-8', error => {
      if (error) {
        throw error;
      }
      logInfo('Navigation files rewrite complete');
      callback?.();
    });
  });
};

module.exports = {
  navigationPreparations,
};
