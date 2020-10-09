import React from 'react';

import { InputBlock } from './styles';

function Input({ label, name }) {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} />
    </InputBlock>
  );
}

export default Input;
