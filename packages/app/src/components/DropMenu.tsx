import React, { FunctionComponent } from 'react';
import { Frame, useToggle, Text } from 'nuggets';
import OutsideClickHandler from 'react-outside-click-handler';

export type IDropMenuProps = {};

export const DropMenu: FunctionComponent<IDropMenuProps> = ({}) => {
  const drop = useToggle();
  return (
    <Frame
      styles={{
        size: 20,
        color: '#000000',
        corners: 3,
        cursor: 'pointer',
      }}
      events={{
        click: drop.on,
      }}
    >
      {drop.active && (
        <OutsideClickHandler onOutsideClick={drop.off}>
          <Frame
            styles={{
              width: 140,
              color: '#000000',
              space: 5,
              corners: 3,
              zindex: 100,
              absolute: {
                top: 0,
                right: 0,
              },
            }}
          >
            <Frame
              styles={{
                space: 10,
                corners: 3,
              }}
            >
              <Text styles={{ color: '#FFFFFF' }} value="Logout" />
            </Frame>
          </Frame>
        </OutsideClickHandler>
      )}
    </Frame>
  );
};
