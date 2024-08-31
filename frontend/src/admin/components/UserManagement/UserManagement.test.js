import React from 'react';
import ReactDOM from 'react-dom';
import UserManagement from './UserManagement';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});