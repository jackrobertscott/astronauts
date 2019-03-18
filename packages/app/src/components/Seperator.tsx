import React, { FunctionComponent } from 'react';
import { Frame } from 'nuggets';

export type ISeperatorProps = {
  children?: any;
};

export const Seperator: FunctionComponent<ISeperatorProps> = ({ children }) => (
  <Frame
    styles={{
      direction: 'right',
      force: 'between',
    }}
  >
    {children}
  </Frame>
);
