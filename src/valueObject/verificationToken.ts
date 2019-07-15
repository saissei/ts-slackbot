import { ValueObject } from './valueObject';

export class VerificationToken extends ValueObject {
  private verificationToken: string;

  public static of(verificationToken: string): VerificationToken {
    return new VerificationToken(verificationToken);
  }

  private constructor(verificationToken: string) {
    super();
    this.verificationToken = verificationToken;
  }

  public equals(other: VerificationToken): boolean {
    if (this === other) {
      return true;
    }
    if (this.verificationToken === other.get()) {
      return true;
    }
    return false;
  }

  public get(): string {
    return this.verificationToken;
  }
  public toString(): string {
    return this.verificationToken;
  }
}
