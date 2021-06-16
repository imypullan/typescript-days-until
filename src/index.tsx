import React from 'react';
import ReactDOM from 'react-dom';
import Parent from "./Components/Parent";
import Sidebar from "./Components/Parent/Sidebar";

ReactDOM.render(
  <React.StrictMode>
      <Parent />
  </React.StrictMode>,
  document.getElementById('root')
);

