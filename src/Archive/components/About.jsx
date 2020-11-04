import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //当使用HashRouter把App根组件的元素包裹起来之后，网站就已经启用路由了
        return <div>
            About
        </div>
    }

}