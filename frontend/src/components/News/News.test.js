import React from 'react';
import ReactDOM from 'react-dom';
import News from './News';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<News />, div);
  ReactDOM.unmountComponentAtNode(div);
});