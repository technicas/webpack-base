import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟DOM
//<h1 id="myh1" title="This is a h1">一个大大的H1</h1>
const myh1 = React.createElement('h1', {id: 'myh1', title: 'This is a h1'}, '一个大大的H1')
ReactDOM.render(myh1, document.getElementById('app'))