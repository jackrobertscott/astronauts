/**
 * This module manages a single field on a data object
 * which has been returned from the database. It should
 * handle updates into and out of the property.
 */
export default class Field {
  private current: any;

  constructor(current: any) {
    this.current = current;
  }

  public get value() {
    return this.current;
  }

  public change() {
    /**
     * 1. Determine the change to the property.
     * 2. Update the fields value.
     * 3. Send the the change to the server.
     * 4. If there is a problem, cache the change in memory and wait for a new connection.
     */
  }
}
