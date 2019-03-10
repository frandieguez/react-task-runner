import React from 'react';
import ReactDOM from 'react-dom';
import TaskStatusColumn from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let status = { }
  ReactDOM.render(<TaskStatusColumn status={status} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
