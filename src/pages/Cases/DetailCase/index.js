import React from 'react';

import {
  Content,
  Container,
  TextContent,
  ButtonContent,
  ValueCollected,
  Title,
  Progress,
  TableDonators,
  EditIcon,
} from './styles';

import Header from '../../../components/Header';
import Text from '../../../components/Text';

function DetailCase() {
  return (
    <>
      <Header
        title="Detalhes do [CASO EXEMPLO]"
        description={<span>Aberto</span>}
        label="Casos"
      />

      <Container>
        <Content>
          <ButtonContent>
            <a href="#!">
              <button type="button">
                <EditIcon />
                Editar
              </button>
            </a>
          </ButtonContent>

          <TextContent>
            <Text
              width="100%"
              title="Título do caso"
              text="Cachorrinha atropelada"
            />
          </TextContent>

          <TextContent>
            <Text width="100%" title="Valor estimado" text="R$ 346,00" />
          </TextContent>

          <TextContent>
            <Text width="100%" title="Data de Criação" text="10/10/2020" />
          </TextContent>

          <TextContent>
            <Text
              width="100%"
              title="Título do caso"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper blandit dolor, a consectetur mi tempus nec. Cras iaculis est sit amet venenatis tempor. Curabitur venenatis metus a elit ultrices bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            />
          </TextContent>

          <ValueCollected>
            <Title>
              <strong>Total Arrecadado</strong>
              <span>R$ 300,00 / R$ 346,00</span>
            </Title>
            <Progress>
              <div>
                <strong>R$ 300,00</strong>
              </div>
            </Progress>
          </ValueCollected>

          <TableDonators>
            <caption>Doadores que ajudaram nesse caso</caption>
            <thead>
              <tr>
                <th>User</th>
                <th>Doação</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pedro Lucas Bezerra</td>
                <td>R$ 150,00</td>
                <td>10/10/2020</td>
              </tr>
              <tr>
                <td>Gabriel José de Oliveira</td>
                <td>R$ 150,00</td>
                <td>10/10/2020</td>
              </tr>
            </tbody>
          </TableDonators>
        </Content>
      </Container>
    </>
  );
}

export default DetailCase;
