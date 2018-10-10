import React, {PureComponent} from 'react'

import AddNew from './AddNew';
import AddForm from './AddForm';
import Procedure from '../Procedure';

export default class Add extends PureComponent {
  constructor(props) {
    super(props);
    this
      .setAdd
      .bind(this);
  }

  state = {
    isAdd: false,
    name: '',
    description: ''
  }

  setAdd() {
    const isAddToChange = !this.state.isAdd;
    this.setState({isAdd: isAddToChange});
  }

  render() {
    const {newItemAdd} = this.props;
    if (this.state.isAdd) {
      return (<AddForm
        name={this.state.name}
        description={this.state.description}
        position={this.state.position}
        onChangeValue={(event) => {
        const target = event.target;
        const value = target.type === 'checkbox'
          ? target.checked
          : target.value;
        const name = target.name;
        this.setState({[name]: value});
      }}
        actionCancell={() => {
        this.setAdd();
      }}
        action={async(e) => {
        e.preventDefault();
        const {name, description} = this.state;
        const position = null;
        const procedure = new Procedure(name, description, position);
        this.setAdd();
        this.setState({name: '', description: ''});
        const response = await fetch('http://10.19.92.47:8088/api/procedure', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(procedure)
        });
        const newItem = await response.json();
        newItemAdd(newItem);
      }}/>);
    }
    return (<AddNew add={() => {
      this.setAdd();
    }}/>)
  }
}
