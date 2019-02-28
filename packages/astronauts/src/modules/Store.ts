import Collection from './Collection';

export interface IStoreOptions {
  id: string;
}

/**
 * This module is the controller of data and manages
 * the fetch and update requests that must occur
 * as the data changes on both the client and the
 * server.
 */
export default class Store {
  private id: string;

  constructor({ id }: IStoreOptions) {
    this.id = id;
  }

  public single(domain: string) {
    return new Collection({
      domain,
      type: 'object',
    });
  }

  public multiple(domain: string) {
    return new Collection({
      domain,
      type: 'array',
    });
  }
}
