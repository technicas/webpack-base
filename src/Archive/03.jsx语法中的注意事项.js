//导包
import React from 'react'
import ReactDOM from 'react-dom'

let a = 10
const arr = [
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]

const arrStr = ['毛利兰', '柯南', '小五郎', '灰原哀']
//定义一个空数组，将来用来存放 名称标签

const nameArr = []
arrStr.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>
    nameArr.push(temp)
})


//渲染
ReactDOM.render(
    <div>
        {a}
        <hr />
        {nameArr}
        <hr />

        <p className="myClass">!!!!!</p>
        <label htmlFor="label">testLabel</label>
    </div>, document.getElementById('app'))