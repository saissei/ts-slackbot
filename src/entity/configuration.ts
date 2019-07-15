import { BotToken } from '../valueObject/botToken';
import { VerificationToken } from '../valueObject/verificationToken';
import { Entity } from '../entity/entity';
import { RedirectURI } from '../valueObject/redirectURI';

export type configJson = {
  verificationToken: string;
  botToken: string;
  redirectUri: string;
};

export class Config extends Entity<VerificationToken> {
  private verificationToken: VerificationToken;
  private botToken: BotToken;
  private redirectUri: RedirectURI;

  public constructor(verificationToken: VerificationToken, botToken: BotToken, redirectUri: RedirectURI) {
    super();
    this.verificationToken = verificationToken;
    this.botToken = botToken;
    this.redirectUri = redirectUri;
  }

  public getVerificationToken(): VerificationToken {
    return this.verificationToken;
  }
  public getBotToken(): BotToken {
    return this.botToken;
  }
  public getRedirectURI(): RedirectURI {
    return this.redirectUri;
  }
  public getIdentifier(): VerificationToken {
    return this.verificationToken;
  }
  public copy(): Config {
    const { verificationToken, botToken, redirectUri } = this;

    return new Config(verificationToken, botToken, redirectUri);
  }

  public toJSON(): configJson {
    const { verificationToken, botToken, redirectUri } = this;
    return {
      verificationToken: verificationToken.get(),
      botToken: botToken.get(),
      redirectUri: redirectUri.get(),
    };
  }

  public toString(): string {
    const { verificationToken, botToken } = this;
    return `${verificationToken.toString()} ${botToken.toString()}`;
  }
}
