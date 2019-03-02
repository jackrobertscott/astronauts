import React, { Component } from 'react';
import { Store } from 'astronauts';

const store = new Store({ id: 'asdf' });

store.use({
  users: store
    .multiple('users')
    .filters({ limit: 5 })
    .data({ name: '' }),
});

export default class App extends Component {
  public render() {
    return <div>Hello, Jack!</div>;
  }
}
