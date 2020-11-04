//导包
import React from 'react'
import ReactDOM from 'react-dom'

//第一种创建组件的方式
//组件的首字母一定要是大写
function Hello(props) {
    console.log(props)
    //return null
    //在组件中必须返回一个合法的JSX虚拟DOM元素
    return <div>这是Hello组件 --- {props.name} --- {props.age} --- {props.gender}</div>
}

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