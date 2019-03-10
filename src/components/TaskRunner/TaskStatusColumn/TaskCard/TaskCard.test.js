import React from 'react';
import ReactDOM from 'react-dom';
import TaskCard from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let task = { }
  ReactDOM.render(<TaskCard task={task} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
