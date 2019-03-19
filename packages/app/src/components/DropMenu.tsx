import React, { FunctionComponent } from 'react';
import { Frame, useToggle, Text } from 'nuggets';
import OutsideClickHandler from 'react-outside-click-handler';

export type IDropMenuProps = {
  items: IItemProps[];
};

export const DropMenu: FunctionComponent<IDropMenuProps> = ({ items }) => {
  const drop = useToggle();
  return (
    <Frame
      styles={{
        height: 15,
        width: 20,
        corners: 3,
        cursor: 'pointer',
        force: 'between',
      }}
      events={{
        click: drop.on,
      }}
    >
      <Line />
      <Line />
      <Line />
      {drop.active && (
        <OutsideClickHandler onOutsideClick={drop.off}>
          <Frame
            styles={{
              width: 200,
              space: {
                verts: 5,
              },
              corners: 5,
              zindex: 100,
              absolute: {
                top: -10,
                right: -10,
              },
              color: '#FFFFFF',
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
            {items.map(({ name, action }) => (
              <Item key={name} name={name} action={action} />
            ))}
          </Frame>
        </OutsideClickHandler>
      )}
    </Frame>
  );
};

export interface IItemProps {
  name: string;
  action: () => any;
}

const Item: FunctionComponent<IItemProps> = ({ name, action }) => (
  <Frame
    styles={{
      space: {
        verts: 10,
        sides: 15,
      },
      corners: 3,
      hover: {
        color: '#F5F5F5',
      },
    }}
    events={{
      click: action,
    }}
  >
    <Text styles={{ color: '#000000' }} value={name} />
  </Frame>
);

const Line = () => (
  <Frame
    styles={{
      height: 3,
      color: '#999999',
      corners: 3,
    }}
  />
);
