import React from 'react';

import { InputBlock } from './styles';

function Input({ width, label, name, type, placeholder }) {
  return (
    <InputBlock width={width}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} placeholder={placeholder} />
    </InputBlock>
  );
}

export default Input;
