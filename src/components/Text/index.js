import React from 'react';

import { TextBlock } from './styles';

function Text({ width, title, text }) {
  return (
    <TextBlock width={width}>
      <strong>{title}</strong>
      <p>{text}</p>
    </TextBlock>
  );
}

export default Text;
