import React, { FunctionComponent } from 'react';
import { Frame, Layer } from 'nuggets';

export type IBackgroundProps = {
  children: any;
};

export const Background: FunctionComponent<IBackgroundProps> = ({
  children,
}) => (
  <Layer>
    <Frame
      styles={{
        grow: true,
        color: '#F1F1F1',
        align: 'center',
        force: 'center',
      }}
    >
      {children}
    </Frame>
  </Layer>
);
