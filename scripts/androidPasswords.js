const fs = require('fs');

const { resolve } = require('path');
const gradlePropsPath = resolve('android/gradle.properties');
const androidKeysPath = resolve('android_keys.json');
fs.readFile(gradlePropsPath, 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  const rawData = fs.readFileSync(androidKeysPath);
  const keys = JSON.parse(rawData);
  if (keys) {
    const lookingFor = Object.keys(keys);
    let newData = data;
    lookingFor.forEach(key => {
      const value = keys[key];
      const keyRegexp = new RegExp(
        key + '=' + '([a-zA-Z0-9]{1,}(.[a-zA-Z0-9]{1,})?(.[a-zA-Z0-9]{1,})?)?',
        'g',
      );
      newData = newData.replace(keyRegexp, `${key}=${value}`);
    });
    fs.writeFileSync(gradlePropsPath, newData, 'utf-8');
  }
});
