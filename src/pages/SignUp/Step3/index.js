import React from 'react';

import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import {
  Container,
  ImageContent,
  Content,
  FormContent,
  InputBlock,
  ButtonContent,
  BackIcon,
} from './styles';

import registerImage from '../../../assets/images/register.svg';

function Step3() {
  return (
    <Container>
      <FormContent>
        <h3>Helper</h3>
        <Content>
          <a href="#!">
            <BackIcon />
            Voltar
          </a>
          <div>
            <h1>Cadastrar-se</h1>
            <p>Preencha os campos abaixo para efetuar o cadastro</p>
          </div>
          <form>
            <strong>Informações sobre a entidade</strong>
            <InputBlock>
              <Input
                width="70%"
                type="text"
                name="cnpj"
                label="CNPJ"
                placeholder="Digite seu CNPJ"
              />
              <Input
                width="30%"
                type="text"
                name="initials"
                label="Sigla"
                placeholder="Digite a sigla da entidade"
              />
            </InputBlock>
            <InputBlock>
              <Textarea
                name="description"
                label="Breve descrição da entidade"
              />
            </InputBlock>
            <ButtonContent>
              <button type="submit">Concluir</button>
            </ButtonContent>
          </form>
        </Content>
      </FormContent>

      <ImageContent>
        <h3>Helper</h3>
        <img src={registerImage} alt="Cadastre-se" />
      </ImageContent>
    </Container>
  );
}

export default Step3;
