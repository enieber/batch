import React, { PureComponent } from 'react'

import AddNew from './AddNew';
import AddForm from './AddForm';
import Procedure from '../Procedure';

export default class Add extends PureComponent {
  constructor(props) {
    super(props);
    this.setAdd.bind(this); 
  }

  state = {
    isAdd: false,
    name: '',
    description: '',
  }

  setAdd() {
    const isAddToChange = !this.state.isAdd;
    this.setState({
      isAdd: isAddToChange,
    });
  }

  render() {
    if (this.state.isAdd) {
      return (
        <AddForm
          name={this.state.name}
          description={this.state.description}
          position={this.state.position}
          onChangeValue={(event) => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({
              [name]: value
            });
          }}
          actionCancell={() => {
            this.setAdd();
          }}
          action={(e) => {
            e.preventDefault();
            const {
              name,
              description,
            } = this.state;
            const position = -1;
            const procedure = new Procedure(name, description, position);
            console.log(procedure);
            this.setAdd();
            this.setState({
              name: '',
              description: '',
            });
          }}
        />
      );
    }
    return (
      <AddNew
        add={() => {
          this.setAdd();
        }}
      />
    )
  }
}
