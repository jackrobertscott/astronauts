import React, { FunctionComponent } from 'react';
import { Frame, Text } from 'nuggets';

export type IButtonProps = {
  value: string;
  click: (...args: any[]) => any;
  subtle?: boolean;
};

export const Button: FunctionComponent<IButtonProps> = ({
  value,
  subtle,
  click,
}) => (
  <Frame
    styles={{
      color: subtle ? 'transparent' : '#000000',
      space: 15,
      corners: 5,
      transition: 200,
      hover: {
        color: subtle ? 'rgba(0, 0, 0, 0.1)' : '#333333',
        cursor: 'pointer',
      },
    }}
    events={{
      click,
    }}
  >
    <Text
      styles={{
        color: subtle ? '#999999' : '#FFFFFF',
        thickness: 500,
      }}
      value={value}
    />
  </Frame>
);
