import React, { PureComponent } from 'react';

import LabelStyled from '../components/LabelStyled';
import Button from '../components/Button';

export default class AddForm extends PureComponent {
  render() {
    const {
      action, onChangeValue, name, description, actionCancell,
    } = this.props;

    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 5,
        }}
      >
        <h3>Adicionar Procedimento</h3>
        <LabelStyled
          name="Nome"
          input={() => (<input type="text" name="name" value={name} onChange={onChangeValue} />)}
        />
        <LabelStyled
          name="Descrição"
          input={() => (
            <input
              type="text"
              name="description"
              value={description}
              onChange={onChangeValue}
            />
          )}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Button action={action} description="Adicionar" />
          <Button type="danger" action={actionCancell} description="Cancelar" />
        </div>
      </form>
    );
  }
}
