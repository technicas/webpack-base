//导包
import React from 'react'
import ReactDOM from 'react-dom'



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