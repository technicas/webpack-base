//导包
import React from 'react';
import ReactDOM from 'react-dom';



import App from "@/App";
//由于直接使用Ant Design的全部包体积过大，所以按需导入，不再需要引入css
// import 'antd/dist/antd.css'


//渲染
ReactDOM.render(<App />, document.getElementById('app'))