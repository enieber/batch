import React, { PureComponent } from 'react';

import Button from '../components/Button';

export default class AddNew extends PureComponent {
  render() {
    const { add } = this.props;

    return (<Button description="+ Novo Procedimento" action={add} />);
  }
}
