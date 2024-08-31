import React from 'react';
import ReactDOM from 'react-dom';
import HeroManagement from './HeroManagement';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});