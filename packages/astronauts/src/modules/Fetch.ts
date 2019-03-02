import config from '../config';

export interface IFetchOptions {
  id: string;
}

export interface IFetchSendOptions {
  action: string;
  type: string;
}

/**
 * This module manages any fetch requests that need to
 * be sent to the server. It is a simple interface
 * over the top of the native fetch library.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
export class Fetch {
  private id: string;

  constructor({ id }: IFetchOptions) {
    this.id = id;
  }

  /**
   * Send json data to the server.
   *
   */
  public data(data: any, { action }: { action: string }) {
    return this.core(JSON.stringify(data), {
      action,
      type: 'application/json',
    });
  }

  /**
   * Upload files to the server.
   */
  public files(files: FormData, { action }: { action: string }) {
    return this.core(files, {
      action,
      type: 'application/x-www-form-urlencoded',
    });
  }

  /**
   * Send anything to the server.
   */
  public core(data: any, { action, type }: IFetchSendOptions) {
    const headers = new Headers();
    headers.set('Content-Type', type);
    headers.set('Bearer', this.id);
    const options = {
      method: 'post',
      headers,
      body: data,
    };
    const resolve = (response: Response) => response.json();
    return fetch(`${config.endpoint}/${action}`, options).then(resolve);
  }
}
