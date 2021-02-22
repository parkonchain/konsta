import React from 'react';
import List from './List';

const MenuList = (props) => {
  const {
    // Children
    children,

    // Rest
    ...rest
  } = props;

  const attrs = {
    ...rest,
  };

  return (
    <List menuList {...attrs}>
      {children}
    </List>
  );
};

export default MenuList;