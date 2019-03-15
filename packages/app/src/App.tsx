import React from 'react';
import { Layer, Frame, Out } from 'nuggets';

/**
 * Hooks don't work on the root component...
 */
export default () => (
  <Layer id="root">
    <Frame
      styles={{
        color: 'purple',
        size: 500,
        space: 30,
      }}
    >
      <Out value="Hello world!" />
    </Frame>
  </Layer>
);
