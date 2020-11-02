//导包
import React from 'react'
import ReactDOM from 'react-dom'

import '@/./10.class关键字创建React组件'


class Movie extends React.Component {
    constructor() {
        //由于Movie组件使用了继承extends，所以构造器中必须先调用父类的构造函数
        super();

        //state为私有数据，函数方法创建的组件没有私有数据
        //props和state的区别：props中的数据都是外界传递过来的。state数据都是私有的，一般通过ajax获取过来的
        //props中的数据都是只读的。state的数据是可读可写的。
        this.state = {
            msg: '大家好'
        }
    }
    //render函数的作用：渲染当前组件的虚拟DOM元素
    render() {
        //在class关键字创建的组件中，如果想使用外界传递过来的props参数，不需要接收，直接通过this.props.***来访问
        return <div>
            {/*注意：在class组件内部， this表示当前组件的实例对象*/}
            这是一个Movie组件 -- {this.props.name} -- {this.props.age} -- {this.props.gender}
            <h3>{this.state.msg}</h3>
        </div>
    }
}

const user = {
    name: 'zs',
    age: 22,
    gender: '男'
};

//渲染
ReactDOM.render(
    <div>
        123
        {/* 这里的Movie标签就相当于Movie类的一个实例 */}

        {/*传统写法*/}
        {/*<Movie name={user.name} age={user.age}></Movie>*/}
        {/*ES6写法*/}
        <Movie {...user}></Movie>
    </div>, document.getElementById('app'))