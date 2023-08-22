/*
    npm  start  를 하게 되면 최초로 실행되는  파일은  src/index.js 이다 
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
// App.js 파일을 불러와서 App 라는 이름으로 사용하기
import App from './App';

// public/index.html 파일에서 id 가 root 인 요소에  App 을  렌더링하기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
