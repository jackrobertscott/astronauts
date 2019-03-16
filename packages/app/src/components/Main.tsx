import React, { FunctionComponent } from 'react';
import { Frame, Layer, Text } from 'nuggets';

export type IMainProps = {
  children: any;
};

export const Main: FunctionComponent<IMainProps> = ({ children, ...props }) => (
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
          color: '#FFFFFF',
          gradient: {
            angle: -185,
            color: ['#FFFFFF', '#F2F2F2'],
          },
          space: 20,
          corners: 10,
          shade: {
            color: 'rgba(0, 0, 0, 0.15)',
            blur: 6,
            down: 3,
          },
          width: {
            use: 340,
            max: '100%',
          },
          borders: {
            thickness: 1,
            color: '#EBEBEB',
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
          <Frame
            styles={{
              size: 20,
              color: '#B2B2B2',
              corners: 3,
            }}
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
              color: '#B2B2B2',
            }}
            value="Securely login with Parley."
          />
        </Frame>
      </Frame>
    </Frame>
  </Layer>
);
