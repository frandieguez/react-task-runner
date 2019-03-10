import React from 'react';
import ReactDOM from 'react-dom';
import TaskRunner from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskRunner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
