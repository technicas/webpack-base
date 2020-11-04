import React from 'react';

import CmtItem from "@/components/Comment/CmtItem";
import CmtBox from "@/components/Comment/CmtBox";

import CmtListCss from "@/css/cmtlist.css";

//评论列表组件
export default class CmtList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {user:'zx', content:'123'},
                {user:'ls', content:'12fda3'},
                {user:'ww', content:'fsda'}
            ]
        };
    }

    componentWillMount() {
        this.loadCmts();
    }

    render() {
        return <div>
            <h1 className={CmtListCss.title}>这是评论列表组件</h1>

        {/*    发表评论的组件*/}
            <CmtBox reload={this.loadCmts}></CmtBox>
        {/*    循环渲染一些评论内容组件*/}
            {this.state.list.map((item, i) => {
                return <CmtItem key={i} {...item}></CmtItem>
            })}
        </div>
    }

    //从本地存储中加载评论列表
    loadCmts = () => {
        var list = JSON.parse(localStorage.getItem('cmts') || '[]');
        this.setState({
            list
        })
    }
}