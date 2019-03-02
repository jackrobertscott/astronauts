export type IType = 'object' | 'array';

export interface IStructureOptions {
  domain: string;
  type: IType;
}

export interface IQueryOptions {
  where?: {
    [property: string]: any;
  };
  limit?: number;
  skip?: number;
}

export interface IDataStructure {
  [property: string]: any;
}

/**
 * This module controls a specific store structure
 * object.
 */
export class Structure {
  private domain: string;
  private type: IType;
  private query: IQueryOptions = {};
  private structure: IDataStructure = {};

  constructor({ domain, type }: IStructureOptions) {
    this.domain = domain;
    this.type = type;
  }

  public filters(options: IQueryOptions): Structure {
    this.query = { ...(this.query || {}), ...(options || {}) };
    return this;
  }

  public data(options: IDataStructure): Structure {
    this.structure = { ...(this.structure || {}), ...(options || {}) };
    return this;
  }

  public digest() {
    const compile = Object.keys(this.structure || {}).reduce((accum, next) => {
      const value =
        this.structure[next] instanceof Structure
          ? this.structure[next].digest()
          : this.structure[next];
      return {
        ...accum,
        [next]: value,
      };
    }, {});
    return {
      type: this.type,
      domain: this.domain,
      filters: this.query,
      compile,
    };
  }
}
