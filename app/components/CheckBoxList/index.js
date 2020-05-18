import React from 'react';
import PropTypes from 'prop-types';
import CheckboxWithLabel from '../CheckboxWithLabel';

import { Wrapper } from './style';

function CheckboxList(props) {
  return (
    <Wrapper>
      {props.data.length > 0 &&
        props.data.map((item, index) => (
          <CheckboxWithLabel
            key={`item-${index}`}
            label={item.title}
            value={item.value}
            getSelectedFilterFunc={props.getSelectedFilterFunc}
            filterFor={props.filterFor}
          />
        ))}
    </Wrapper>
  );
}

CheckboxList.propTypes = {
  data: PropTypes.array,
};

export default CheckboxList;
