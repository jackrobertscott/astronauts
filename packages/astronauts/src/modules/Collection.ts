export type IType = 'object' | 'array';

export interface ICollectionOptions {
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
 * This module controls a specific store collection
 * object.
 */
export default class Collection {
  private domain: string;
  private type: IType;
  private query: IQueryOptions = {};
  private structure: IDataStructure = {};

  constructor({ domain, type }: ICollectionOptions) {
    this.domain = domain;
    this.type = type;
  }

  public filter(options: IQueryOptions) {
    this.query = { ...(this.query || {}), ...(options || {}) };
  }

  public data(options: IDataStructure) {
    this.structure = { ...(this.structure || {}), ...(options || {}) };
  }
}
