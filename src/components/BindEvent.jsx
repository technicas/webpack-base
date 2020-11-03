import React from 'react';

export default class BindEvent extends React.Component{
    constructor() {
        super();
        this.state = {
            msg: '哈哈'
        };
    }

    render() {
        return <div>
            <button onClick={() => this.show()}>按钮</button>
        </div>
    }

    show = () => {
        console.log("222");

        //注意 React中， 如果为state 中的数据，重新赋值，不要使用this.state.*** = 值
        //应该调用React 提供的 this.setState();
        // this.state.msg = "ooooo";
        this.setState({
            msg: '123'
        });
    }
}