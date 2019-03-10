import React from 'react';
import ReactDOM from 'react-dom';
import TaskForm from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');

  let addTask = () => {}
  let handleInput = () => {}
  let formInfo = {}
  let inputElement = React.createRef()

  ReactDOM.render(<TaskForm addTask={addTask} handleInput={handleInput} inputElement={inputElement} formInfo={formInfo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
