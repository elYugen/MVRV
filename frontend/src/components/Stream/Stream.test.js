import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './Stream';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stream />, div);
  ReactDOM.unmountComponentAtNode(div);
});