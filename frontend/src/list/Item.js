import React, {PureComponent} from 'react';

export default class Item extends PureComponent {
  render() {
    const {name, description} = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <span>{description}</span>
      </div>
    );
  }
}
