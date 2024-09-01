import React from 'react';
import ReactDOM from 'react-dom';
import NewsManagement from './NewsManagement';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});