import React, { FunctionComponent } from 'react';
import { Frame, Text, useAddress } from 'nuggets';

export type ILargeListItemProps = {
  label: string;
  path: string;
};

const ListItem: FunctionComponent<ILargeListItemProps> = ({ label, path }) => {
  const address = useAddress();
  const active = address.match({ path });
  return (
    <Frame
      styles={{
        space: 15,
        cursor: 'pointer',
        corners: 5,
        color: active ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
        hover: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
      }}
      events={{
        click: () => address.change(path),
      }}
    >
      <Text styles={{ color: '#FFFFFF' }} value={label} />
    </Frame>
  );
};

export type ILargeProps = {
  children: any;
};

export const Large: FunctionComponent<ILargeProps> = ({ children }) => {
  return (
    <Frame
      styles={{
        color: '#121212',
        space: 20,
        corners: 10,
        direction: 'right',
        gradient: {
          angle: -200,
          color: ['#000000', '#363636'],
        },
        shade: {
          color: 'rgba(0, 0, 0, 0.05)',
          blur: 3,
          down: 1,
        },
        width: {
          use: 640,
          max: '100%',
        },
        borders: {
          thickness: 1,
          color: '#000000',
        },
      }}
    >
      <Frame
        styles={{
          space: {
            right: 20,
          },
          width: 200,
          borders: {
            sides: ['right'],
            thickness: 1,
            color: '#404040',
          },
        }}
      >
        <ListItem label="Members" path="/developers/members" />
        <ListItem label="Users" path="/developers/users" />
        <ListItem label="Subscriptions" path="/developers/subscriptions" />
        <ListItem label="Receipts" path="/developers/receipts" />
      </Frame>
      <Frame
        styles={{
          grow: true,
          space: {
            top: 10,
            sides: 20,
          },
        }}
      >
        {children}
      </Frame>
    </Frame>
  );
};
