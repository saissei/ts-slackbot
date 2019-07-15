import { ValueObject } from './valueObject';

export class RedirectURI extends ValueObject {
  private redirectURI: string;

  public static of(redirectURI: string): RedirectURI {
    return new RedirectURI(redirectURI);
  }

  private constructor(redirectURI: string) {
    super();
    this.redirectURI = redirectURI;
  }

  public equals(other: RedirectURI): boolean {
    if (this === other) {
      return true;
    }
    if (this.redirectURI === other.get()) {
      return true;
    }
    return false;
  }

  public get(): string {
    return this.redirectURI;
  }
  public toString(): string {
    return this.redirectURI;
  }
}
