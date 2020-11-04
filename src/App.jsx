import React from 'react';

import {HashRouter, Route, Link} from 'react-router-dom';

import Home from "@/components/Home";
import Movie from "@/components/Movie";
import About from "@/components/About";

//导入日期选择组件
import {DatePicker} from "antd";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //当使用HashRouter把App根组件的元素包裹起来之后，网站就已经启用路由了
        return <HashRouter>
            <div>
                <h1>这是网站的根组件</h1>

                <DatePicker></DatePicker>

                <hr />

                <Link to="/home">首页</Link>&nbsp;&nbsp;
                <Link to="/movie/top250/5">电影</Link>&nbsp;&nbsp;
                <Link to="/about">关于</Link>&nbsp;&nbsp;
                <hr />
                {/*Route船舰的标签，就是路由规则，其中path表示要匹配的路由，component表示要展示的组件*/}
                <Route path="/home" component={Home}></Route>
                <Route path="/movie/:type/:id" component={Movie}></Route>
                <Route path="/about" component={About}></Route>
            </div>
        </HashRouter>
    }

}