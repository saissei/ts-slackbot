import { ValueObject } from './valueObject';

export class BotToken extends ValueObject {
  private botToken: string;

  public static of(botToken: string): BotToken {
    return new BotToken(botToken);
  }

  private constructor(botToken: string) {
    super();
    this.botToken = botToken;
  }

  public equals(other: BotToken): boolean {
    if (this === other) {
      return true;
    }
    if (this.botToken === other.get()) {
      return true;
    }
    return false;
  }

  public get(): string {
    return this.botToken;
  }
  public toString(): string {
    return this.botToken;
  }
}
