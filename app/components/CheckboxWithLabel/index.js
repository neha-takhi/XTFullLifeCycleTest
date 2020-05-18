import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

function CheckboxWithLabel(props) {
  const { value, label, getSelectedFilterFunc, filterFor } = props;
  const [checked, setCheck] = useState(value);

  useEffect(() => {
    setCheck(value);
  }, [value]);

  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        setCheck(!checked);
        getSelectedFilterFunc(label, filterFor);
      }}
      style={{ display: 'block' }}
    >
      {label}
    </Checkbox>
  );
}

CheckboxWithLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
};

export default CheckboxWithLabel;
