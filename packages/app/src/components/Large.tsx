import React, { FunctionComponent } from 'react';
import { Frame, Layer, Text, useAddress } from 'nuggets';

export type ILargeListItemProps = {
  label: string;
  click: () => any;
};

const ListItem: FunctionComponent<ILargeListItemProps> = ({ label, click }) => (
  <Frame
    styles={{
      space: 15,
      cursor: 'pointer',
      corners: 5,
      hover: {
        color: 'rgba(255, 255, 255, 0.05)',
      },
    }}
    events={{
      click,
    }}
  >
    <Text styles={{ color: '#FFFFFF' }} value={label} />
  </Frame>
);

export type ILargeProps = {
  children: any;
};

export const Large: FunctionComponent<ILargeProps> = ({ children }) => {
  const address = useAddress();
  return (
    <Layer>
      <Frame
        styles={{
          grow: true,
          color: '#D3B2D9',
          align: 'center',
          force: 'center',
        }}
      >
        <Frame
          styles={{
            color: '#121212',
            space: 20,
            corners: 10,
            direction: 'right',
            gradient: {
              angle: -185,
              color: ['#000000', '#363636'],
            },
            shade: {
              color: 'rgba(0, 0, 0, 0.15)',
              blur: 6,
              down: 3,
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
            <ListItem
              label="Members"
              click={() => address.change('/developers/members')}
            />
            <ListItem
              label="Users"
              click={() => address.change('/developers/users')}
            />
            <ListItem
              label="Subscriptions"
              click={() => address.change('/developers/subscriptions')}
            />
            <ListItem
              label="Receipts"
              click={() => address.change('/developers/receipts')}
            />
          </Frame>
          <Frame>{children}</Frame>
        </Frame>
      </Frame>
    </Layer>
  );
};
