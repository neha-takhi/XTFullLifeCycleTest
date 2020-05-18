import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  return (
    <Wrapper>
      <Item>
        <span className="key">{props.item.title}</span>
        <span className="value">{props.item.value}</span>
      </Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
