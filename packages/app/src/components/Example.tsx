import React from 'react';
import { Layer, Frame, Text } from 'nuggets';

export default () => (
  <Layer id="root">
    <Frame
      styles={{
        color: 'purple',
        size: 500,
        space: 30,
      }}
    >
      <Text value="Hello world!" />
    </Frame>
  </Layer>
);
