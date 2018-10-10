import React, {Component} from 'react';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Item from './Item';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging
    ? 'lightgreen'
    : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver
    ? 'lightblue'
    : 'lightgrey',
  padding: grid,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '50vw'
});

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.onDragEnd = this
      .onDragEnd
      .bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const id = result.draggableId;
    const position = result.destination.index + 1;
    fetch(`http://10.19.92.47:8088/api/procedure/${id}/position`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({position})
    }).then(res => console.log(res));
    const items = reorder(this.state.items, result.source.index, result.destination.index);
    this.setState({items});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.data !== this.props.data) {
      this.setState({items: nextProps.data});
      return true;
    }
    return true;
  }

  async componentDidMount() {
    const {data} = this.props;
    const dataSelected = data.map(item => Object.assign({}, item, {
      ...item,
      title: item.name
    }));
    this.setState({items: dataSelected});
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
              {this
                .state
                .items
                .map((item, index) => (
                  <Draggable key={item._id} draggableId={item._id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        <Item {...item}/>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
