import Structure from './Structure';

export interface IStoreOptions {
  id: string;
}

export interface IStoreStructure {
  [property: string]: Structure;
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

  public use(tree: IStoreStructure) {
    /**
     * Thoughts: should we even need to run the digest function? or
     * instead, we compute the values straight away. The initial values
     * of the fields are the properties set and then when the server
     * returns the true values, they are updated?
     *
     * If we send requests from each item then it prevents us from using
     * "batch" requests. As such, we should instead, still populate the
     * object straight away with defaults. But also, wait until the "use"
     * function is called before we actually start sending requests to
     * the server.
     */
    const digests = Object.keys(tree).reduce((accum, next) => {
      return {
        ...accum,
        [next]: tree[next].digest(),
      };
    }, {});
    /**
     * 1. Send digest tree to out to fetch from client - or should we move this to the Structure class?
     * 2. Return the values which should be used by the user.
     * 3. Listen for changes.
     */
  }

  public single(domain: string) {
    return new Structure({
      domain,
      type: 'object',
    });
  }

  public multiple(domain: string) {
    return new Structure({
      domain,
      type: 'array',
    });
  }
}
