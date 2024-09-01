import React from 'react';
import ReactDOM from 'react-dom';
import StreamerManagement from './StreamerManagement';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StreamerManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});