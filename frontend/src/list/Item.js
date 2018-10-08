import React, { PureComponent } from 'react';

export default class Item extends PureComponent {
  render() {
    const { title, description } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    );
  }
}
