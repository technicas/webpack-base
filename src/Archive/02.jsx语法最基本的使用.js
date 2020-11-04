//导包
import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟元素
//const mydiv = React.createElement('div', {id: 'mydiv', title: 'div aaa'}, '这是一个div元素')

//html标记方式
//在JS中默认不能写HTML标记
//可以用babel来转换这些JS中的标签
//在JS中混合写入类似于HTML的语法为JSX语法；即符合XML规范的JS；
const mydiv = <div id="mydiv" title="div aaa">
    这是一个div元素
    <h1>这是一个大大的H1</h1>
    </div>

//渲染
ReactDOM.render(mydiv, document.getElementById('app'))