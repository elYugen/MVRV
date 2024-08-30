import React from 'react';
import ReactDOM from 'react-dom';
import AdminNavbar from './AdminNavbar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminNavbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});