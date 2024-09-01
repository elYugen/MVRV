import React from 'react';
import ReactDOM from 'react-dom';
import HeroList from './HeroList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroList />, div);
  ReactDOM.unmountComponentAtNode(div);
});