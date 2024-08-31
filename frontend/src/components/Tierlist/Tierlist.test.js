import React from 'react';
import ReactDOM from 'react-dom';
import Tierlist from './Tierlist';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tierlist />, div);
  ReactDOM.unmountComponentAtNode(div);
});