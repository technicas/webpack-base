//项目的根组件
import React from "react";

//导入路由组件
import {HashRouter, Route, Link} from "react-router-dom";

//导入Ant Design组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <HashRouter>
            <Layout className="layout" style={{height:'100%'}}>
                {/*Header 头部区域*/}
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/movie">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                {/*中间内容区域*/}
                <Content>
                    <div className="site-layout-content">Content</div>
                </Content>
                {/*Footer底部区域*/}
                <Footer style={{ textAlign: 'center' }}>Lgs ©2018 Created by TdLgs</Footer>
            </Layout>
        </HashRouter>
    }
}