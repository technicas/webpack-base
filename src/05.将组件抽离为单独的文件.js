//导包
import React from 'react'
import ReactDOM from 'react-dom'

//导入Hello组件
//默认如果不做单独配置的话，不能省略jsx后缀名
//import Hello from './components/Hello'

//@符号代表根目录下src级别
import Hello from '@/components/Hello'

const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

//

//渲染
ReactDOM.render(
    <div>
        123
        {/*直接把 组件的名称以标签形式丢到render中*/}
        {/*<Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>*/}
        {/*使用展开运算符 ...*/}
        <Hello {...dog}></Hello>
    </div>, document.getElementById('app'))