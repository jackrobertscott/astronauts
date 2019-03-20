import React, { FunctionComponent } from 'react';
import { Large } from '../components/Large';
import { useAddress, Text } from 'nuggets';
import { Members } from './Members';

export const Developers: FunctionComponent<{}> = () => {
  const address = useAddress();
  const current = [
    { title: 'Members', path: '/developers/members', route: Members },
  ].find(address.match);
  if (!current) {
    address.change('/developers/members');
    return <div>Loading...</div>;
  }
  const { title, route: Component } = current;
  return (
    <Large>
      <Text
        value={title}
        styles={{
          size: 18,
          color: '#FFFFFF',
          thickness: 600,
        }}
      />
      <Component />
    </Large>
  );
};
