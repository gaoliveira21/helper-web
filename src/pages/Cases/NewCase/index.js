import React from 'react';

import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import {
  Form,
  Container,
  InputContent,
  Dropzone,
  ButtonContent,
} from './styles';

import Header from '../../../components/Header';

function NewCase() {
  return (
    <>
      <Header
        title="Cadastrar novo caso"
        description="Crie um novo caso para receber doações!"
        label="Casos"
      />

      <Container>
        <Form>
          <InputContent>
            <Input
              width="70%"
              label="Título do caso"
              name="title"
              type="text"
            />
            <Input
              width="30%"
              label="Valor do caso R$"
              name="value"
              type="text"
            />
          </InputContent>
          <InputContent>
            <Textarea label="Título do caso" name="title" />
          </InputContent>
          <InputContent>
            <Dropzone>
              <label htmlFor="images">Adicionar imagens ao caso</label>
              <div>Dropzone</div>
            </Dropzone>
          </InputContent>
          <ButtonContent>
            <button type="submit">Cadastrar</button>
          </ButtonContent>
        </Form>
      </Container>
    </>
  );
}

export default NewCase;
