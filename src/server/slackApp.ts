//import { App } from '@slack/bolt';
import { Botkit } from 'botkit';
import { SlackAdapter } from 'botbuilder-adapter-slack';
import { configJson } from '../entity/configuration';

export class slackApp {
  private adapter: any;
  private controller: any;

  private static instance(config: configJson) {
    return new slackApp(config);
  }

  public static getInstance(config: configJson): slackApp {
    return slackApp.instance(config);
  }

  private constructor(config: configJson) {
    this.adapter = new SlackAdapter(config);
    return this.adapter;
  }

  public Connect() {
    this.controller = new Botkit({
      adapter: this.adapter,
    });
    return this.controller;
  }

  public async eventListener(): Promise<any> {
    console.log('test');
    this.controller.hears('hello', 'message', async (bot: any, message: any) => {
      await bot.reply(message, 'bar');
    });
  }
}
