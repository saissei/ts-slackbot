//import { slackConfig } from './slackConfig'
import { configJson } from '../entity/configuration';
const config = require('config');

import { slackApp } from './slackApp';
const slackProfile: configJson = {
  verificationToken: config.get('verificationToken'),
  botToken: config.get('signingSecret'),
  redirectUri: config.get('redirectUri'),
};
//const configInstance: slackConfig = slackConfig.getInstance()
//const slackEnv = configInstance.fromJSON(slackProfile)
(async () => {
  try {
    let app: slackApp = slackApp.getInstance(slackProfile);
    console.log(slackProfile);
    await app.Connect;
    console.log('Connected');
    app.eventListener;
  } catch (err) {
    console.error(err);
  }
})();
