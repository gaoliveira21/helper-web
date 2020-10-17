import React from 'react';

import { InputBlock } from './styles';

function Input({ width, label, name, type, placeholder, ...rest }) {
  return (
    <InputBlock width={width}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} {...rest} />
    </InputBlock>
  );
}

export default Input;
