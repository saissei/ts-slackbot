import { Identifier } from '../general/identifire'

export abstract class ValueObject implements Identifier {
  public abstract equals(other: ValueObject): boolean

  public abstract toString(): string
}
