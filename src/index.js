import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 연결된 컴포넌트
import AppUseContext from './useContext/AppUseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppUseContext />
  </React.StrictMode>
);


