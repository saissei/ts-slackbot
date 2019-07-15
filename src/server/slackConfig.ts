import { Config, configJson } from '../entity/configuration';
import { VerificationToken } from '../valueObject/verificationToken';
import { BotToken } from '../valueObject/botToken';
import { RedirectURI } from '../valueObject/redirectURI';

export class slackConfig {
  private static instance: slackConfig = new slackConfig();

  public static getInstance(): slackConfig {
    return slackConfig.instance;
  }

  private constructor() {}

  public from(verificationToken: VerificationToken, botToken: BotToken, redirectUri: RedirectURI): Config {
    return new Config(verificationToken, botToken, redirectUri);
  }

  public fromJSON(json: configJson): Config {
    const { verificationToken, botToken, redirectUri } = json;

    return this.from(VerificationToken.of(verificationToken), BotToken.of(botToken), RedirectURI.of(redirectUri));
  }
}
