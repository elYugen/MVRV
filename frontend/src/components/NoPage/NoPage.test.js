import React from 'react';
import ReactDOM from 'react-dom';
import NoPage from './NoPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});