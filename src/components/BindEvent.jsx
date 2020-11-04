import React from 'react';

export default class BindEvent extends React.Component{
    constructor() {
        super();
        this.state = {
            msg: '哈哈',
            name: 'zs',
            age:22,
            gender:'男'
        };
    }

    render() {
        return <div>
            <button onClick={() => this.show()}>按钮</button>
        </div>
    }

    show = () => {
        //注意 React中， 如果为state 中的数据，重新赋值，不要使用this.state.*** = 值
        //应该调用React 提供的 this.setState();
        // this.state.msg = "ooooo";
        //在react中如果要修改state的数据，要使用setState来修改
        this.setState({
            msg: '123'
        }, function() {
            console.log(this.state.msg);
        });

        //setState方法的执行是异步的
        //如果调用完setState后，双想立即拿到最新的state，需要使用this.setState({}, callback)
        //例如下面拿到的值并不是设置后的
        // console.log(this.state.msg);
    }
}