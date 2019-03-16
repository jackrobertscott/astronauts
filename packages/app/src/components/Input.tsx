import React, { FunctionComponent } from 'react';
import { Frame, Text, ITextProps } from 'nuggets';

export type IInputProps = ITextProps & {
  label: string;
};

export const Input: FunctionComponent<IInputProps> = ({
  label,
  editable,
  ...props
}) => (
  <Frame
    styles={{
      color: '#FFFFFF',
      space: 15,
      corners: 5,
      borders: {
        thickness: 1,
        color: '#EBEBEB',
      },
      force: 'start',
    }}
  >
    <Frame
      styles={{
        space: {
          bottom: 16,
        },
      }}
    >
      <Text
        styles={{
          color: '#B7B7B7',
        }}
        value={label}
      />
    </Frame>
    <Frame
      styles={{
        height: '1.2em',
      }}
    >
      <Text
        styles={{
          color: '#000000',
          thickness: 500,
        }}
        editable={typeof editable === 'boolean' ? editable : true}
        {...props}
      />
    </Frame>
  </Frame>
);
