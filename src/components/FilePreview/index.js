import React from 'react'

import { ImagePreview } from './styles'

function FilePreview ({ file, remove }) {
  return (
    <ImagePreview>
      <img
        key={file.preview || file.url}
        src={file.preview || file.url}
        width='100'
      />
      <button type='button' onClick={() => remove(file.preview)}>Excluir</button>
    </ImagePreview>
  )
}

export default FilePreview
