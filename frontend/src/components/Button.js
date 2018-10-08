import React, { PureComponent } from 'react';

export default class Button extends PureComponent {
  render() {
    const { action, description, type } = this.props;

    return (
      <button
        onClick={action}
        style={{
          border: 'none',
          fontSize: '1em',
          backgroundColor: `${type === 'danger'
            ? '#9c3848'
            : '#1e3888'}`,
          color: '#fff',
          borderRadius: 5,
          padding: 10,
          margin: 5,
        }}
      >
        {description}
      </button>
    );
  }
}
