import React, { FunctionComponent } from 'react';
import { Frame, Text } from 'nuggets';
import { DropMenu } from './DropMenu';

export type IMainProps = {
  children: any;
};

export const Main: FunctionComponent<IMainProps> = ({ children }) => (
  <Frame
    styles={{
      color: '#FFFFFF',
      space: 20,
      corners: 10,
      width: {
        use: 340,
        max: '100%',
      },
      gradient: {
        angle: -200,
        color: ['#FFFFFF', '#F1F1F1'],
      },
      shade: {
        color: 'rgba(0, 0, 0, 0.05)',
        blur: 3,
        down: 1,
      },
      borders: {
        thickness: 1,
        color: '#E3E3E3',
      },
    }}
  >
    <Frame
      styles={{
        space: {
          bottom: 40,
        },
        direction: 'right',
        force: 'between',
      }}
    >
      <Frame>
        <Text
          styles={{ size: 20, color: '#000000', thickness: 700 }}
          value="Parley"
        />
      </Frame>
      <DropMenu
        items={[{ name: 'Logout', action: () => console.log('Logout') }]}
      />
    </Frame>
    <Frame
      styles={{
        between: 10,
      }}
    >
      {children}
    </Frame>
    <Frame
      styles={{
        space: {
          top: 20,
        },
      }}
    >
      <Text
        styles={{
          size: 14,
          color: '#A9A9A9',
        }}
        value="Securely login with Parley."
      />
    </Frame>
  </Frame>
);
