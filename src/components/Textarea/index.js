import React from 'react';

import { InputBlock } from './styles';

function Input({ width, label, name }) {
  return (
    <InputBlock width={width}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} />
    </InputBlock>
  );
}

export default Input;
