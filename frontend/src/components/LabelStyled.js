import React, { PureComponent } from 'react';

export default class extends PureComponent {
  render() {
    const { name, input } = this.props;

    return (
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        {name}
        :
        {' '}
        {input()}
      </label>
    );
  }
}
